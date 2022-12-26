import React from 'react';
import CalenderApp from '../../components/CalenderApp/CalenderApp';
import { container, innerContainer, innerText, pageDivider, pageHeaderClickable, pageTitle } from '../../components/common/ClassNames';
import Collapse from '../../components/common/Collapse/Collapse';
import me from '../../components/pics/me.png';
import Contact from '../Contact/Contact';

function About() {
    const objects = [
        {
            title: <p className={pageHeaderClickable}>Contact</p>,
            content: [<Contact/>],
            open: false
        }
    ];
    
    return (
        <main className={container}>
            <p className={pageTitle}>Welcome</p>
            <hr className={pageDivider} />
            <div className={innerContainer}>
                <p className={innerText}>My name is Tochy Egeonu and I am a practicing software developer. I do not really have a focus at the moment, I just learn what I can. Feel free to contact me.</p>
                <a href='https://drive.google.com/file/d/1S4w82XwdNZATUdfBj3Lzz5W0ZnX1a0Px/view?usp=sharing' className={pageHeaderClickable} target="_blank" rel="noreferrer">My resume</a>
                {objects.map((element,index) => (
                    <Collapse 
                        key={index}
                        trigger={element.title}
                        content={element.content}
                        open={element.open}
                    />
                ))}
                <div className="col-start-1 grid grid-col-1 my-5 justify-center mx-10">
                    <div className="col-start-1 col-span-1 flex flex-col">
                        <img src={me} className="w-96" alt='selfie' />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;