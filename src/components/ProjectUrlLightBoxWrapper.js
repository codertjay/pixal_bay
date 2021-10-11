import React , { Component } from 'react';
import {
    MDBAlert , MDBBtn , MDBCard ,
    MDBCardBody , MDBCardGroup ,
    MDBCardImage , MDBCardText ,
    MDBCardTitle , MDBCardVideo ,
    MDBCol ,
    MDBContainer ,
    MDBLightbox ,
    MDBRow
} from 'mdbreact';
import { connect } from 'react-redux'
import SimpleReactLightbox , { SRLWrapper } from "simple-react-lightbox";
import Hoc from '../hoc/hoc'
import SectionContainer from "./sectionContainer";

class ProjectUrlLightBox extends Component {


    render () {

        const {projectUrl} = this.props
        console.log ('the props im' , projectUrl)
        if (projectUrl) {
            return (
                <Hoc>
                    {Object.keys (projectUrl).length > 0 ?
                        <Hoc>{projectUrl.map ((projects , index) => (
                            <Hoc key={index}>
                                <div className="display-4">
                                    {projects.name}
                                </div>
                                <div className="row ">
                                    <SimpleReactLightbox   key={index}>
                                        <SRLWrapper  key={index}>
                                            {projects.project_url_items.map ((items , index) => (
                                                <div className="col-md-4 col-4 col-sm-6  image-fluid card-image image-thumbnail ">

                                                    <img src={`http://127.0.0.1:8000${items.image}`}
                                                         alt={`${items.detail}`}
                                                         data-attribute="SRL"/>
                                                </div>
                                            ))}
                                        </SRLWrapper>
                                    </SimpleReactLightbox>

                                </div>


                            </Hoc>
                        ))
                        }</Hoc> : null
                    }
                </Hoc>
            )
        } else return (
            <div> hello </div>
        )
    }
}


export default ProjectUrlLightBox;