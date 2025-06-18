import React, { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaEye,
  FaTag,
  FaLaptopCode,
  FaChartLine,
  FaListUl,
  FaLightbulb,
  FaDollarSign,
  FaBoxOpen,
  FaClipboardList,
  FaCommentAlt,
  FaEnvelope,
  FaCheck,
  FaSpinner,
} from "react-icons/fa";
import { useParams } from "react-router-dom";

const SingleWebSiteDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/Course-Data/website.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        const foundProject = data.find((project) => project.id == id);
        if (foundProject) {
          setProject(foundProject);
        } else {
          setError("Project not found");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching project data:", error);
        setError("Failed to load project data");
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Function to render section with icon
  const renderSection = (title, icon, content) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md">
      <div className="flex items-center mb-4">
        <div className="text-[#41bfb8] bg-[#e8f9f8] p-2 rounded-lg mr-3">
          {icon}
        </div>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>
      {content}
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-[#f0fdfc]">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-[#41bfb8] mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-[#f0fdfc]">
        <div className="bg-white rounded-xl p-8 shadow-lg max-w-md text-center">
          <div className="bg-red-100 text-red-500 rounded-full p-4 w-16 h-16 mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Project Not Found
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            className="bg-[#41bfb8] hover:bg-[#3aaca5] text-white font-medium py-2 px-6 rounded-lg transition-colors"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-[#f0fdfc] py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/5">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl w-full h-64 object-cover shadow-lg border-4 border-white"
              />

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="bg-[#f0fdfc] p-3 rounded-lg border border-[#d1f5f2]">
                  <div className="text-gray-500 text-sm mb-1">Category</div>
                  <div className="font-medium flex items-center">
                    <FaTag className="text-[#41bfb8] mr-2" size={14} />
                    <p className="text-gray-500">{project.category}</p>
                  </div>
                </div>

                <div className="bg-[#f0fdfc] p-3 rounded-lg border border-[#d1f5f2]">
                  <div className="text-gray-500 text-sm mb-1">Type</div>
                  <div className="font-medium flex items-center">
                    <FaLaptopCode className="text-[#41bfb8] mr-2" size={14} />
                    <p className="text-gray-500">{project.type}</p>
                  </div>
                </div>

                <div className="bg-[#f0fdfc] p-3 rounded-lg border border-[#d1f5f2]">
                  <div className="text-gray-500 text-sm mb-1">Posted</div>
                  <div className="font-medium flex items-center">
                    <FaCalendarAlt className="text-[#41bfb8] mr-2" size={14} />
                    <p className="text-gray-500">{project.posted}</p>
                  </div>
                </div>

                <div className="bg-[#f0fdfc] p-3 rounded-lg border border-[#d1f5f2]">
                  <div className="text-gray-500 text-sm mb-1">Views</div>
                  <div className="font-medium flex items-center">
                    <FaEye className="text-[#41bfb8] mr-2" size={14} />
                    <p className="text-gray-500">{project.views}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-3/5">
              <div className="flex justify-between items-start">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  {project.title}
                </h1>
                <span className="bg-[#41bfb8] text-white text-xs px-3 py-1 rounded-full font-medium">
                  Premium
                </span>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed border-l-4 border-[#41bfb8] pl-4 py-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.details.tech_stack.slice(0, 5).map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.details.tech_stack.length > 5 && (
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    +{project.details.tech_stack.length - 5} more
                  </span>
                )}
              </div>

              <div className="bg-gradient-to-r from-[#41bfb8] to-[#2da8a0] rounded-lg p-6 text-white">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-lg">Investment Opportunity</h3>
                  <div className="bg-white text-[#2da8a0] px-3 py-1 rounded-full text-sm font-bold">
                    PROFITABLE
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm opacity-80">Monthly Revenue</div>
                    <div className="font-bold text-xl">
                      {project.details.project_metrics.monthly_revenue}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm opacity-80">Active Users</div>
                    <div className="font-bold text-xl">
                      {project.details.project_metrics.active_users}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm opacity-80">Retention Rate</div>
                    <div className="font-bold text-xl">
                      {project.details.project_metrics.retention_rate}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Features */}
          {renderSection(
            "Key Features",
            <FaListUl size={20} />,
            <ul className="space-y-3">
              {project.details.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-[#41bfb8] p-1 rounded-full mt-1 mr-3 flex items-center justify-center">
                    <FaCheck className="text-white" size={10} />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tech Stack */}
          {renderSection(
            "Technology Stack",
            <FaLaptopCode size={20} />,
            <div className="flex flex-wrap gap-2">
              {project.details.tech_stack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Benefits */}
          {renderSection(
            "Business Benefits",
            <FaChartLine size={20} />,
            <ul className="space-y-3">
              {project.details.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-[#e8f9f8] p-1 rounded-full mt-1 mr-3">
                    <div className="w-2 h-2 bg-[#41bfb8] rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Buyer Opportunities */}
          {renderSection(
            "Growth Opportunities",
            <FaDollarSign size={20} />,
            <ul className="space-y-3">
              {project.details.buyer_opportunities.map((opportunity, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-[#e8f9f8] p-1 rounded-full mt-1 mr-3">
                    <div className="w-2 h-2 bg-[#41bfb8] rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{opportunity}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Included in Sale */}
          {renderSection(
            "Included in Sale",
            <FaBoxOpen size={20} />,
            <ul className="space-y-3">
              {project.details.included_in_sale.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-[#e8f9f8] p-1 rounded-full mt-1 mr-3">
                    <div className="w-2 h-2 bg-[#41bfb8] rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Project Metrics */}
          {renderSection(
            "Performance Metrics",
            <FaClipboardList size={20} />,
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(project.details.project_metrics).map(
                ([key, value], index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                  >
                    <div className="text-sm text-gray-500 uppercase tracking-wide">
                      {key.replace(/_/g, " ")}
                    </div>
                    <div className="text-lg font-semibold text-gray-800">
                      {value}
                    </div>
                  </div>
                )
              )}
            </div>
          )}

          {/* Other Notes */}
          {renderSection(
            "Additional Information",
            <FaCommentAlt size={20} />,
            <ul className="space-y-3">
              {project.details.other_notes.map((note, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-[#e8f9f8] p-1 rounded-full mt-1 mr-3">
                    <div className="w-2 h-2 bg-[#41bfb8] rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{note}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Reason for Selling */}
          {renderSection(
            "Reason for Selling",
            <FaLightbulb size={20} />,
            <p className="text-gray-700 italic border-l-4 border-[#41bfb8] pl-4 py-1">
              {project.details.reason_for_selling}
            </p>
          )}
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-[#41bfb8]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Interested in this project?
              </h2>
              <p className="text-gray-600">
                Contact the seller for more information or to schedule a demo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#41bfb8] hover:bg-[#3aaca5] text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center">
                <FaEnvelope className="mr-2" />
                Contact Seller
              </button>
              <button className="border-2 border-[#41bfb8] text-[#41bfb8] hover:bg-[#f0fdfc] font-medium py-3 px-8 rounded-lg transition-colors">
                Request Documentation
              </button>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="ml-4">
              <h3 className="font-bold text-gray-800">Project Contact</h3>
              <p className="text-gray-700">{project.contact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWebSiteDetails;
