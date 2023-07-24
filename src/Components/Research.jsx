import React from 'react';

const Research = () => {
    return (
        <div>
            <h1 className='text-center text-green-500 text-2xl'>Research on Some University  </h1>
<p className='pt-6 text-center'>Click the image to view the full research on the university</p>
<div className="p-5 bg-green-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-6 gap-8">

<a style={{width:"300px"}}href="https://www.researchgate.net/publication/341215656_AIUB_Who_influenced_me_more_A_comparative_study_of_the_factors_that_affect_career_decision_of_undergraduate_students_in_Bangladesh_Who_influenced_me_more_A_comparative_study_of_the_factors_that_affect"><img src="researchAIUB.png" alt="" /></a>
<a style={{width:"300px"}}href="https://www.academia.edu/34003184/An_Internship_on_Libraries_and_Information_Institutions_A_Case_Study_of_of_Dhaka_University_Library" className='bg-white  '><img src="researchDU.png" alt="" /></a>
<a style={{width:"300px"}}href="https://www.brac.net/program/advocacy-social-change/asc-publications-and-reports/"><img src="researchBrac.jpg" alt="" /></a>
<a style={{width:"300px"}}href="https://itn.buet.ac.bd/web/publication/"><img src="researchBUET.jpg" alt="" /></a>
<a style={{width:"300px"}}href="https://www.yumpu.com/en/document/view/30481722/download-independent-university-bangladesh"><img src="researchIUB.jpg" alt="" /></a>
<a style={{width:"300px"}}href="https://www.researchgate.net/publication/322538102_Correlation_of_Grades_of_NSU_Students_and_Birth_Order"><img src="researchNSU.jpg" alt="" /></a>
</div>

        </div>
    );
};

export default Research;