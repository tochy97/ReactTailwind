import React from 'react';
import { Link } from 'react-router-dom';
import { navTitle, subNavComponent, subNavContainer, subNavHeader } from '../common/ClassNames';
import SubBar from './SubBar/SubBar';

function Nav() {

    const objects = [
        {
            title: "Social",
            content: [
                <div className={subNavHeader}>
                    <ul className={subNavContainer}>
                        <li>
                            <a className={subNavComponent} href="https://www.linkedin.com/in/tochukwu-egeonu-79935a127/">
                                <span className="ml-2">LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a className={subNavComponent} href="https://www.facebook.com/tochy.egeonu">
                                <span className="ml-2">Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a className={subNavComponent} href="https://www.instagram.com/chy.toe/?next=%2F">
                                <span className="ml-2">Instagram</span>
                            </a>
                        </li>
                    </ul>
                </div>
                ]
        },
        {
            title: "Games",
            content: [
                <div className={subNavHeader}>
                    <ul className={subNavContainer}>
                        <li>
                            <Link 
                                className={subNavComponent} 
                                to="games" state= {{ chosen: "snake" }}>
                                <span className="ml-2">Snake</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className={subNavComponent} 
                                to="games" state= {{ chosen: "runner" }}>
                                <span className="ml-2">Runner</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className={subNavComponent} 
                                to="games" state= {{ chosen: "pacman" }}>
                                <span className="ml-2">PacMan</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            ]
        }
    ];

    return (
        <>
            <nav className="relative w-full flex flex-wrap items-center justify-between px-2 py-3 bg-gray-400 mb-3 text-md">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
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