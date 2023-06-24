import React from 'react'

function VideoPlayer() {
    return (
        <>
            <div className='my-5 px-lg-5 px-sm-0'>
                 <iframe width="100%" height="300vh"
                    src="https://www.youtube.com/embed/97zGmkdhSNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                 <div className='px-4 pt-4'>
                    <p>
                    Welcome to our AI-powered education platform! Are you tired of spending hours creating lesson plans, educational quizzes, handouts, and writing student reports? Do you wish there was a way to automate some of these tasks and save time? Look no further!

                    Sign up today and discover how our platform can revolutionise the way you approach lesson planning and student assessment. Say goodbye to the tedious work and hello to more time to focus on what really matters - teaching and helping your students succeed. Join our community of educators who are already using AI to their advantage!

                    </p>
                </div>
            </div>
        </>
    )
}

export default VideoPlayer