import React from "react";

import { useState, useEffect, useRef } from "react";
import { graphql, StaticQuery, Link } from "gatsby";



const AboutVideo = () => {


    const videoRef = useRef(null);
    useEffect(() => {
        const video = videoRef.current;

        // Show loading animation.

        // Play the video and handle the result using promises.
        const playPromise = video.play();

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    video.play();
                })
                .catch(error => {
                    // Auto-play was prevented
                    // Show paused UI.
                });
        }
    }, []);
    const handleVideoEnded = () => {
        const video = videoRef.current;
        video.play();
    };





    return (
        <>

          
            <StaticQuery

                query={graphql`
            query {
				wpPage(id: { eq: "cG9zdDoxMDM=" }) {
					title
					slug
				homePartnerSection {
					  partnerDetail
					  partner {
						partnerImage {
						  sourceUrl
						}
                        siteUrl
					  }
					}
				  
					about {
					  advisorsheading
					  description
					  heading
					  ouradvisors {
						designation
						image {
						  sourceUrl
						}
						linkedinurl
						name
						colorimage {
							sourceUrl
						  }
					  }
					  teamheading
					  ourteam {
						designation
						linkedinurl
						name
						image {
						  sourceUrl
						}
						colourImage {
						  sourceUrl
						}
					  }
					}
				}
              }
            `}
                render={data => (
                    <>

                        <main>
                            <section className="section">
                                <div className="secation02 bhg">
                                    <div className="jhg_tfrd">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-5 colmd5" style={{ position: 'relative' }}>
                                                    <div className="kj_bgvcdfs">

                                                        <div className="image_gnbdd">

                                                            <div className="image_hfgfss">
                                                                <video
                                                                    id="myVideo"
                                                                    preload=""
                                                                    src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/earth-65103.mp4"
                                                                    ref={videoRef}
                                                                    autoPlay
                                                                    muted
                                                                    onEnded={handleVideoEnded}

                                                                    className="video"

                                                                >

                                                                </video>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="our_about_wrap" dangerouslySetInnerHTML={{ __html: data.wpPage.about.description }}>



                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>



                        </main>

                    </>

                )}
            />
        </>
    );
};

export default AboutVideo;