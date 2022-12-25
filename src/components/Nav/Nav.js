import React from 'react';
import { Link } from 'react-router-dom';
import { navBar, navComponentContainer, navContainer, navTitle, navTitleContainer, subNavComponent, subNavContainer, subNavHeader } from '../common/ClassNames';
import SubBar from './SubBar/SubBar';

function Nav() {

    const objects = [
        {
            title: "Social",
            content: [
                <div className={subNavHeader}>
                    <ul className={subNavContainer}>
                        <li>
                            <a className={`${subNavComponent}`} href="https://www.linkedin.com/in/tochukwu-egeonu-79935a127/">
                                <span className="mx-2">LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a className={`${subNavComponent}`} href="https://www.facebook.com/tochy.egeonu">
                                <span className="mx-2">Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a className={`${subNavComponent}`} href="https://www.instagram.com/chy.toe/">
                                <span className="mx-2">Instagram</span>
                            </a>
                        </li>
                    </ul>
                </div>
                ]
        },
        // {
        //     title: "Games",
        //     content: [
        //         <div className={subNavHeader}>
        //             <ul className={subNavContainer}>
        //                 <li>
        //                     <Link 
        //                         className={`${subNavComponent}`}
        //                         to="games" state= {{ chosen: "snake" }}>
        //                         <span className="mx-2">Snake</span>
        //                     </Link>
        //                 </li>
        //                 <li>
        //                     <Link 
        //                         className={`${subNavComponent}`} 
        //                         to="games" state= {{ chosen: "runner" }}>
        //                         <span className="mx-2">Runner</span>
        //                     </Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     ]
        // }
    ];

    return (
        <>
            <nav className={navBar}>
                <div className={navContainer}>
                    <div className={`${navTitleContainer} ${navComponentContainer}`}>
                        <Link to="/" className={navTitle}>
                            Tochy Egeonu
                        </Link>
                    </div>
                    <div className='flex'>
                        {objects.map((element,index) => (
                            <SubBar title={element.title} content={element.content} key={index}/>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;