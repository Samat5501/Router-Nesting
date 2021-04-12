import React from 'react'
import { useParams } from 'react-router';

function About() {
    let { topicId } = useParams();
    return (
        <div>
          <h2> I am About Page</h2> 
        </div>
    )
}

export default About
