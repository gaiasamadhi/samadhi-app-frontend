import React from 'react';

const BeginnersCourseInfoCourseContent = () => {
  return (
    <div className="beginners-course-info-course-content">
      <div className="container-fluid bg-info">
        <div className="row justify-content-start">
          <div className="col-6 offset-1 my-5">
            <table className ="table table-bordered bg-light text-info table-hover">
              <thead>
                <tr>
                  <th colspan="2" className="px-5">
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
