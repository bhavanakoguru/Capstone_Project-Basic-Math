import React from "react";
import "./Singleclass.css";
function DisplaySingleclass()
{
    return(
        <div className="iframe">
            <div className="topics">
                        <h3>Topic-1:<b>Real Numbers</b></h3>
                        <div className="subtopics">
                            <u>1.Real Numbers Important Definition</u><br></br><br></br>
                            <u>2.Euclid's Division Lemma</u><br></br><br></br>
                            <u>3.Proof of Euclid's Division Lemma</u><br></br><br></br>
                            <u>4.HCF (Highest common factor)</u><br></br><br></br>
                            <u>5.What is Prime Numbers</u><br></br><br></br>
                            <u>6.What is Composite Numbers</u><br></br><br></br>
                            <u>7.Fundamental Theorem of Arithmetic</u><br></br><br></br>
                            <u>8.HCF and LCM by prime factorization method</u><br></br><br></br>
                            <u>9.Irrational Numbers</u><br></br><br></br>
                            <u>10.How to prove the irrational numbers or Rational numbers</u><br></br>
                        </div>
            </div>
                <div>
                    <h2><u><b>Befoure attempting Exam check your Knowledge here:</b></u></h2>
                    <div className="pre-text">
                        <div className="firsttext">
                        </div>
                        <button className="btn">Pre</button>
                        <button className="btn">Next</button>
                    </div>
                </div>
                <div>
                    <video className="vediotag" controls>
                        <source src={"mathsignuplogo.mp4"} type="video/mp4"></source>
                    </video>
                </div>
                <div>
                        <h2><u>Attempt the exam Now:</u></h2>
                        <div className="post-text">
                            <div className="firsttext">
                            </div>
                            <button className="btn">Pre</button>
                            <button className="btn">Next</button>
                        <div>
                    </div>
                        </div>
            </div>
        </div>
    );
}
export default DisplaySingleclass;