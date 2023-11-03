import { Link } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb/Breadcrumb";
import { routes } from '../../routes';
import ProjectsListGrid from "./ProjectsListGrid/ProjectsListGrid";
import ProjectImage from "./ProjectImage/ProjectImage";
import { useTranslation } from "react-i18next";

const ProjectsCategoryCommon = ({ title, description, categories, projects, projectInfo, projectCategory }) => {
  const [ t] = useTranslation("global"); 


  return (
    <>
      <div className="degradado5 rounded-t-[64px] w-full py-[35px]">
        <h1 className="text-center font-bold text-white text-[42px]">
          { title }
        </h1>
      </div>

      
      <div className="pt-3 pb-[70px] px-[28px] md:px-[40px] lg:px-24 bg-container_color3 shadow-2xl rounded-b-[64px] text-text_dark-gray">
        <div className="mb-7">
          <BreadCrumb />
        </div>
        { !projectInfo &&
         <>
            <p className="mx-auto text-text_dark-gray mb-7 w-[90%] md:w-4/5 lg:mx-30">
              {description}
            </p>
         </>
        }

        <div className="justify-center text-center">
            
            {/* categories links list */}
            { categories &&
              <div className="flex justify-center">
                <div className="w-full">
                  <span className="text-[1.78rem] text-text_dark-gray mb-2">Categories:</span>
                  <hr className="mb-3 w-1/3 mx-auto" />
                  <ul className="w-fit mx-auto mt-2 list-disc text-text_dark-gray">
                    {categories.map((category, index)=> (
                      <li className="py-2 px-3" key={index}>
                        <Link
                          to={`${routes[category.category]}`}
                          className="text-dark_link_color hover:text-dark_link_color_hover2 hover:underline"
                        >
                          {category.category}
                        </Link>
                      </li>
                    ))} 
                  </ul>
                </div>
              </div>
            }
              
            {/* project items list */}
            {projects && (
              <>
                <h3 className="text-[1.78rem] text-text_dark-gray mb-2">Projects list:</h3>
                <hr className="mb-6 w-1/3 mx-auto" />
                <ProjectsListGrid 
                  projects={projects} 
                  category={title} 
                />
              </>
            )}
            
            {/* Project detail  */}
            {projectInfo &&
              <div className="">
                <h2 className="text-4xl text-text_dark-gray">{t(`projectDetail.subtitle`)+':'}</h2>
                  <div className="w-full md:w-3/4 mx-auto my-6 proj_imgbx_large ">
                    <ProjectImage 
                      imgPath = { projectInfo.imgPath }
                      title = { projectInfo.title }
                    />
                  </div>
             
                <div>
                  <h3 className="text-3xl"> 
                    {t(`projectDetail.Description`)+':'}
                  </h3>
                  <p className="text-text_dark-gray">
                    {projectInfo.description}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-3xl">
                    {t(`projectDetail.Category`)+':'}
                  </h3>
                  <p className="text-text_dark-gray">
                    {projectCategory}
                  </p>
                </div>
                
                
              </div>
            }
      
        </div>

        
      </div>
    </>
  );
};

export default ProjectsCategoryCommon;