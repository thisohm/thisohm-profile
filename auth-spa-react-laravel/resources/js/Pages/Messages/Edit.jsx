import React from 'react'
import { Link } from '@inertiajs/react';
import Layout from '@/Shared/Layout';

const Edit = ({messages,auth}) => {
    
  return (
    <Layout
        user={auth.user}
        title="edit"
    >
        <div className="mx-auto my-0" style={{width:"90%"}}>

            <div style={{height:"76px"}} className="d-flex align-items-center mb-1 mb-md-3">
            
                <Link className="d-flex text-decoration-none" style={{cursor:"pointer"}}
                    href="/messages"
                >
                    <div className="text-lg black-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                    </div>

                    { messages && 
                        <p className="ms-4 text-lg black-700">{messages[0].title}</p>
                    }
                </Link>
            </div>

            <div className="d-flex mx-2 mx-md-4">
                <div className="w-50 me-md-5">
                    <div className="text-xs black-700 mb-3">{messages[0].body}</div>

                    <div className="mb-3" style={{maxWidth:"800px"}}>
                        <img src="https://www.byd.com/content/dam/byd-site/en-th/product/atto3/1.jpg" 
                        className="img-fluid" alt="Byd atto3"/>
                    </div>

                    <div className="text-xs black-100 mb-3">
                        {`Facebook - A Electice Vehicle - ${Date()}`}
                    </div>

                    <div className="d-flex flex-column flex-md-row">
                        <div className="btn aluminium-100 me-md-2 mb-1 mb-md-0 d-flex">
                            <div className="text-xs">Link</div>
                            <div className="text-xs ms-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="btn aluminium-100 d-flex">
                            <div className="text-xs">Show original post</div>
                            <div className="text-xs ms-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-50 ms-5">
                    <div>
                        <div className="border-bottom mb-4 pb-5">
                            <div className="pb-1">Label</div>
                            <div className="border d-flex flex-wrap">
                                <span className="rounded-1 text-xs aluminium-100 black-700 px-3 py-1 m-1">Label</span>
                                <span className="rounded-1 text-xs aluminium-100 black-700 px-3 py-1 m-1">Label</span>
                                <span className="rounded-1 text-xs aluminium-100 black-700 px-3 py-1 m-1">Label</span>
                            </div>
                        </div>
                        <div className="border-bottom mb-4 pb-5">
                            <div className="pb-1">Note</div>
                            <form className="form">
                                <textarea className="form-control" style={{height:"100px"}}></textarea>
                            </form>
                        </div>
                        <div>
                            <div className="btn border">
                                <div className="text-xs black-700">Reject</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mx-md-5 mt-5 mt-sm-0 d-flex justify-content-end">
                <div className="btn btn-success">
                    <div className="text-xs">Save</div>
                </div>
            </div>

        </div>
    </Layout>
  )
}

export default Edit