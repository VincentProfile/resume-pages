import './App.css';
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth, db } from "./firebase";

function Home() {
    const navigate = useNavigate();

    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    
    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const query = await db
                    .collection("users")
                    .where("uid", "==", user?.uid)
                    .get();
                const data = await query.docs[0].data();
                setName(data.name);
            } catch (err) {
                console.error(err);
                alert("An error occured while fetching user data");
            }
        };
        if (loading) return;
        if (user){
            return (
            <div>
                <div>
                    <h2>
                        Strengths Summary & Career Objective
                    </h2>
                </div>
                <div>
                    <ul>
                        <li>
                            A resilient individual who is detailed oriented and an independent learner
                        </li>
                        <li>
                            Seeking opportunities in software development; web, mobile, application development
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>
                        Education
                    </h2>
                </div>
                <div>
                    <div>
                        <div>
                            <h6>
                                Nanyang Technological University, Singapore
                            </h6>
                            <p>
                                Aug 2016 - Dec 2019
                            </p>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li>
                                Bachelor of Mechanical Engineering with Specialisation in Systems Engineering
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div>
                            <h6>
                                Singapore Polytechnic
                            </h6>
                            <p>
                                Apr 2011 - Apr 2014
                            </p>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li>
                                Diploma in Marine Engineering
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
        }else navigate('/login');
        fetchUserName();
    }, [user, loading, navigate]);


}

export default Home;