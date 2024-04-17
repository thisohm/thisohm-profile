import React from 'react';
import { Link } from '@inertiajs/react';
import Layout from '@/Shared/Layout';
import Pagination from '@/Shared/Pagination';

const Index = ({task,auth}) => {

  return (
    <Layout 
      user={auth.user}
      title="tasks"
    >  
        <div className="mx-auto my-0" style={{width:"90%"}}>

          <div style={{height:"76px"}} className="d-flex align-items-center">
            <p className="text-lg black-700 page-head">Tasks</p>
          </div>
          
          <div className="table-responsive">
            <table className="border table table-hover">
              <thead>
                <tr>
                  <th className="text-xs black-700 ps-4">Name</th>
                  <th className="text-xs black-700">Client</th>
                  <th className="text-xs black-700">Team Supports</th>
                  <th className="text-xs black-700">Checker</th>
                  <th className="text-xs black-700">Due on</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                { task.data && task.data.map( (item) => (
                    <tr key={item.id}>
                      <td className="ps-4">
                        <Link className="text-xs black-700 d-flex align-items-center text-decoration-none" style={{cursor:"pointer"}}
                          href="/messages"
                        >
                          {item.title}
                        </Link>
                      </td>
                      <td>
                        <Link className="text-xs black-100 d-flex align-items-center text-decoration-none" style={{cursor:"pointer"}}
                          href="/messages"
                        >
                          {item.title}
                        </Link>
                      </td>
                      <td>
                        <Link className="text-xs black-100 d-flex align-items-center text-decoration-none" style={{cursor:"pointer"}}
                          href="/messages"
                        >
                          {item.title}
                        </Link>
                      </td>
                      <td>
                        <Link className="text-xs black-100 d-flex align-items-center text-decoration-none" style={{cursor:"pointer"}}
                          href="/messages"
                        >
                          {item.id}
                        </Link>
                      </td>
                      <td className="pe-3">
                        <Link className="text-xs black-100 d-flex align-items-center text-decoration-none" style={{cursor:"pointer"}}
                          href="/messages"
                        >
                          {item.title}
                        </Link>
                      </td>
                      <td className="pe-4">
                        <div className="d-flex">
                          <div className="text-xs black-700 me-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                            </svg>
                          </div>
                          <div className="text-xs black-700 me-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
                              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
                            </svg>
                          </div>
                          <div className="text-xs black-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-reception-4" viewBox="0 0 16 16">
                              <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                ))}
                {task.data.length === 0 && (
                <tr>
                  <td colspan="6">
                    No tasks found.
                  </td>
                </tr>
                )}
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3">
                    {task.data && 
                      <div className="text-xs black-700">
                        Showing {task.from} to {task.to} of {task.total} results
                      </div>
                    }
                  </td>
                  <td colspan="3">
                    <Pagination links={task.links}/>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
    </Layout>
  )
}

//Index.layout = page => <Layout children={page} title="Tasks"/>
 
export default Index