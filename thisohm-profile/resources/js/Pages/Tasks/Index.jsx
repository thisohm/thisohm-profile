import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import Layout from '@/Shared/Layout';
import Pagination from '@/Shared/Pagination';
import member1 from '../../../../public/assets/Member-01.png';
import point2 from '../../../../public/assets/Point NO-02.png';
import point3 from '../../../../public/assets/Point NO-03.png';
import point4 from '../../../../public/assets/Point NO-04.png';

const Index = ({task,auth}) => {  
  const [activeNum,setActiveNum] = useState(1);
  const [point,setPoint] = useState(6000);

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
                { task.data && task.data.map((item) => (
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
            
            {/* Horeca+ Test UI
            <div className='w-100 mx-auto' style={{marginTop:"300px",marginBottom:"200px"}}>
              <div class="border rounded-3 black-100 container-fluid p-4 align-items-center" style={{backgroundColor:"#f0f0f0"}}>
                <div class="d-flex justify-content-around mt-4" style={{fontSize:"7px"}}>
                  <p className='my-auto'>MEMBERS</p>
                  <span
                    class="my-auto me-2 ms-1"
                    style={{height:"1px",backgroundColor:"black",width:"30%"}}
                  >
                  </span>

                  <p className='my-auto'>SILVER</p>
                  <span
                    class="my-auto me-2 ms-1"
                    style={{height:"1px",backgroundColor:"black",width:"40%"}}
                  >
                  </span>

                  <p className='my-auto'>GOLD</p>
                  <span
                    class="my-auto me-2 ms-1"
                    style={{height:"1px",backgroundColor:"black",width:"30%"}}
                  >
                  </span>
                  
                  <p className='my-auto'>PLATINUM</p>
                </div>

                <div class="d-flex justify-content-between" style={{fontSize:"8px"}}>
                  <p className='my-auto me-4' style={{color:(point<=2999?"red":"")}}>0-2,999</p>
                  <p className='my-auto me-4' style={{color:(point>2999 && point<=5999?"red":"")}}>3,000-5,999</p>
                  <p className='my-auto me-3' style={{color:(point>5999 && point<=8999?"red":"")}}>6,000-8,999</p>
                  <p className='my-auto ms-3' style={{color:(point>8999?"red":"")}}>9,000</p>
                </div>

                <div class="progress my-2" role="progressbar" style={{height:"25px",borderRadius:"10px",backgroundColor:"white"}}>
                  <div class="progress-bar bg-danger" style={{width:(point/9000)*100+"%"}}></div>
                </div>
              </div>
             
              <div>
                <ul class="d-flex list-unstyled justify-content-center mt-5" id="myTab" role="tablist">
                  <li class="nav-item me-3" role="presentation">
                    <button onClick={()=>setActiveNum(1)} class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                      <img src={member1} className={`${activeNum != 1 ? 'opacity-25':''}`} width="50px" alt="" />
                    </button>
                  </li>
                  <li class="nav-item me-3" role="presentation">
                    <button onClick={()=>setActiveNum(2)} class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                      <img src={point2} className={`${activeNum != 2 ? 'opacity-25':''}`} width="50px" alt="" />
                    </button>
                  </li>
                  <li class="nav-item me-3" role="presentation">
                    <button onClick={()=>setActiveNum(3)} class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                      <img src={point3} className={`${activeNum != 3 ? 'opacity-25':''}`} width="50px" alt="" />
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button onClick={()=>setActiveNum(4)} class="nav-link" id="fourth-tab" data-bs-toggle="tab" data-bs-target="#fourth-tab-pane" type="button" role="tab" aria-controls="fourth-tab-pane" aria-selected="false">
                      <img src={point4} className={`${activeNum != 4 ? 'opacity-25':''}`} width="50px" alt="" />
                    </button>
                  </li>
                </ul>

                <div class="tab-content mt-3 mx-auto" style={{width:'90%'}} id="myTabContent">
                  <div class="tab-pane active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                    <div className='border rounded d-flex justify-content-center pt-5 pb-4' style={{backgroundColor:"#f0f0f0"}}> 
                        <div className='text-center'>
                          <img src={member1} width="75px" alt="" className='mb-3'/>
                          <h1 style={{color:"#30B700",fontSize:"30px"}}>Member</h1>
                          <h6 className='pb-2' style={{color:"#767676",fontSize:"15px"}}>Spending: 0-2,999 Baht / year</h6>
                          <hr/>

                          <div className="d-flex align-items-center">
                            <h1 className='px-4' style={{color:"#30B700"}}>01</h1>
                            <h6 style={{color:"#767676",fontSize:"14px"}}>
                              Birthday Discount ส่วนลด 3% <br />
                              ในเดือนเกิด (จากราคาสินค้าปกติ)
                            </h6>
                          </div>
                          <hr />

                          <div className="d-flex align-items-center">
                            <h1 className='px-4' style={{color:"#30B700"}}>02</h1>
                            <h6 style={{color:"#767676",fontSize:"14px"}}>
                              ช้อปสินค้าในราคาสมาชิก
                            </h6>
                          </div>
                          <hr />

                          <div className="d-flex align-items-center">
                            <h1 className='px-4' style={{color:"#30B700"}}>03</h1>
                            <div className='d-flex'>
                              <h6 style={{color:"#767676",fontSize:"14px"}}>Welcome point</h6><h6 className="ps-1" style={{color:"#30B700",fontSize:"14px"}}>(1,000 Point)</h6>
                            </div>
                          </div>
                          <hr />

                          <div className="d-flex align-items-center">
                            <h1 className='px-4' style={{color:"#30B700"}}>04</h1>
                            <h6 style={{color:"#30B700",fontSize:"14px"}}>
                              Redeem Gift
                            </h6>
                          </div>
                        </div>
                    </div>
                  </div>

                  <div class="tab-pane" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                  <div className='border rounded d-flex justify-content-center pt-5 pb-4' style={{backgroundColor:"#f0f0f0"}}> 
                        <div className='text-center'>
                          <img src={point2} width="100px" alt="" className='mb-3'/>
                          <h1 style={{color:"#30B700"}}>Member</h1>
                          <h5>Spending: 0-2,999 Baht / year</h5>
                          <hr />

                          <div className="d-flex align-items-center">
                            <h1 className='px-4 py-1' style={{color:"#30B700"}}>01</h1>
                            <h6 >
                              Birthday Discount ส่วนลด 3% <br />
                              ในเดือนเกิด (จากราคาสินค้าปกติ)
                            </h6>
                          </div>
                          <hr />

                          <div className="d-flex align-items-center">
                            <h1 className='px-4 py-1' style={{color:"#30B700"}}>02</h1>
                            <h6>
                              ช้อปสินค้าในราคาสมาชิก
                            </h6>
                          </div>
                          <hr />

                          <div className="d-flex align-items-center">
                            <h1 className='px-4 py-1' style={{color:"#30B700"}}>03</h1>
                            <div className='d-flex'>
                              <h6>Welcome point</h6><h6 className="ps-1" style={{color:"#30B700"}}>(1,000 Point)</h6>
                            </div>
                          </div>
                          <hr />

                          <div className="d-flex align-items-center">
                            <h1 className='px-4 py-1' style={{color:"#30B700"}}>04</h1>
                            <h6 style={{color:"#30B700"}}>
                              Redeem Gift
                            </h6>
                          </div>
                        </div>
                    </div>
                  </div>
                  
                  <div class="tab-pane" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                  <div className='border rounded d-flex justify-content-center pt-5 pb-4' style={{backgroundColor:"#f0f0f0"}}> 
                        <div className='text-center'>
                          <img src={point3} width="100px" alt="" className='mb-3'/>
                          <h1 style={{color:"#30B700"}}>Member</h1>
                          <h5>Spending: 0-2,999 Baht / year</h5>
                          <hr />

                          <div className="d-flex align-items-center">
                            <h1 className='px-4 py-1' style={{color:"#30B700"}}>01</h1>
                            <h6 >
                              Birthday Discount ส่วนลด 3% <br />
                              ในเดือนเกิด (จากราคาสินค้าปกติ)
                            </h6>
                          </div>
                          <hr />

                          <div className="d-flex align-items-center">
                            <h1 className='px-4 py-1' style={{color:"#30B700"}}>02</h1>
                            <h6>
                              ช้อปสินค้าในราคาสมาชิก
                            </h6>
                          </div>
                          <hr />

                          <div className="d-flex align-items-center">
                            <h1 className='px-4 py-1' style={{color:"#30B700"}}>03</h1>
                            <div className='d-flex'>
                              <h6>Welcome point</h6><h6 className="ps-1" style={{color:"#30B700"}}>(1,000 Point)</h6>
                            </div>
                          </div>
                          <hr />

                          <div className="d-flex align-items-center">
                            <h1 className='px-4 py-1' style={{color:"#30B700"}}>04</h1>
                            <h6 style={{color:"#30B700"}}>
                              Redeem Gift
                            </h6>
                          </div>
                        </div>
                    </div>
                  </div>

                  <div class="tab-pane" id="fourth-tab-pane" role="tabpanel" aria-labelledby="fourth-tab" tabindex="0">
                  <div className='border rounded d-flex justify-content-center pt-5 pb-4' style={{backgroundColor:"#f0f0f0"}}> 
                        <div className='text-center'>
                          <img src={point4} width="100px" alt="" className='mb-3'/>
                          <h1 style={{color:"#30B700"}}>Member</h1>
                          <h5>Spending: 0-2,999 Baht / year</h5>
                          <hr />

                          <div className="d-flex align-items-center">
                            <h1 className='px-4 py-1' style={{color:"#30B700"}}>01</h1>
                            <h6 >
                              Birthday Discount ส่วนลด 3% <br />
                              ในเดือนเกิด (จากราคาสินค้าปกติ)
                            </h6>
                          </div>
                          <hr />

                          <div className="d-flex align-items-center">
                            <h1 className='px-4 py-1' style={{color:"#30B700"}}>02</h1>
                            <h6>
                              ช้อปสินค้าในราคาสมาชิก
                            </h6>
                          </div>
                          <hr />

                          <div className="d-flex align-items-center">
                            <h1 className='px-4 py-1' style={{color:"#30B700"}}>03</h1>
                            <div className='d-flex'>
                              <h6>Welcome point</h6><h6 className="ps-1" style={{color:"#30B700"}}>(1,000 Point)</h6>
                            </div>
                          </div>
                          <hr />

                          <div className="d-flex align-items-center">
                          <h1 className='px-4 py-1' style={{color:"#30B700"}}>04</h1>
                          <h6 style={{color:"#30B700"}}>
                              Redeem Gift
                            </h6>
                          </div>
                        </div>
                    </div>
                  </div>

                </div>
              </div>
            </div> */}

          </div>
        </div>
    </Layout>
  )
}

//Index.layout = page => <Layout children={page} title="Tasks"/>
 
export default Index