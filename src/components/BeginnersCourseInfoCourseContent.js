import React from 'react';

const BeginnersCourseInfoCourseContent = (props) => {
  const {justifyContent,
        offsetLevel}=props

  return (
    <div className="beginners-course-info-course-content">
      <div className="container-fluid bg-info">
        <div className={`row justify-content-${justifyContent}`}>
          <div className={`col-6 offset-${offsetLevel} my-5`} style = {{paddingLeft: "0px"}}>
            <table className ="table table-bordered bg-light text-info table-hover">
              <thead>
                <tr>
                  <th colspan="2" className="px-1">
                    Course content
                  </th>
                </tr>
              </thead>
              <tbody>
                 <tr>
                   <td>
                     1
                   </td>
                   <td>
                     Introduction
                   </td>
                 </tr>
                 <tr>
                   <td>
                     2
                   </td>
                   <td>
                     First steps
                   </td>
                 </tr>
                 <tr>
                   <td>
                     3
                   </td>
                   <td>
                     Breath techniques
                   </td>
                 </tr>
                 <tr>
                   <td>
                     4
                   </td>
                   <td>
                     Visualization
                   </td>
                 </tr>

            </tbody>
          </table>

          </div>
      </div>
    </div>
  </div>




  )
}

export default BeginnersCourseInfoCourseContent;
