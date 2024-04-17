import React from 'react'
import { Link } from '@inertiajs/react';
import Layout from '@/Shared/Layout';
import Pagination from '@/Shared/Pagination';

const Index = ({messages,auth}) => {

  return(
    <Layout
      user={auth.user}
      title="messages"
    >  
        <div className="mx-auto my-0" style={{width:"90%"}}>

          <div style={{height:"76px"}} className="d-flex align-items-center">
            
            <Link className="d-flex text-decoration-none" style={{cursor:"pointer"}}
              href="/tasks"
            >
              <div className="text-lg black-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
              </div>

              <p className="ms-4 text-lg black-700">Recent Activities</p>
            </Link>
          </div>

          <div className="table-responsive">
            <table className="border table table-hover">
              <thead>
                <tr>
                  <th className="text-xs black-700 ps-4">Image</th>
                  <th className="text-xs black-700">Message</th>
                  <th className="text-xs black-700">Label</th>
                  <th className="text-xs black-700">Checked at</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                { messages.data && messages.data.map((item) => (
                    <tr key={item.id}>
                      <td className="text-xs black-700 ps-4" style={{maxWidth:"56px"}}>
                        <img src="https://www.byd.com/content/dam/byd-site/en-th/product/atto3/1.jpg" 
                        className="img-fluid" alt="Byd atto3"/>
                      </td>
                      <td className="text-xs black-100">{item.body}</td>
                      <td className="pe-4">
                        <div className="d-flex flex-wrap">
                          <span className="rounded-1 text-xs aluminium-100 black-700 px-3 py-1 m-1">Label</span>
                          <span className="rounded-1 text-xs aluminium-100 black-700 px-3 py-1 m-1">Label</span>
                          <span className="rounded-1 text-xs aluminium-100 black-700 px-3 py-1 m-1">Label</span>
                        </div>
                      </td>
                      <td className="text-xs black-100">{item.title}</td>
                      <td>
                        <Link className="black-700 px-4" href={`messages/edit/${item.id}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                          </svg>
                        </Link>
                      </td>
                    </tr>
                ))}
                {messages.data.length === 0 && (
                <tr>
                  <td colspan="5">
                    No messages found.
                  </td>
                </tr>
                )}
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2">
                    {messages && 
                      <div className="text-xs black-700">
                        Showing {messages.from} to {messages.to} of {messages.total} results
                      </div>
                    }
                  </td>
                  <td colspan="3">
                    <Pagination links={messages.links}/>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
    </Layout>
  )
}

export default Index