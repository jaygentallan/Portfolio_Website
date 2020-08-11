import React from "react";
import "./Main.css";

const Main = (image) => {
	return (
		<div className="container">
			<div className="introContainer">
				<div
					className="introParallax"
					data-parallax="scroll"
					data-z-index="0"
					data-image-src={require("../images/background1.jpg")}
					data-position-y="-475px 0px"
				>
					<div className="titleContainer">
						<div className="nameTitle"> Jay Gentallan </div>
						<div className="subTitle"> Computer Science Portfolio </div>
					</div>
				</div>

				<div className="aboutMeContainer">
					<div className="heightEqualizer">
						<div className="aboutMeTextContainer">
							<img class="circular--landscape jay" src={require("../images/jay.jpg")} />

							<div className="aboutMeTextContainer2">
								<div className="aboutMeText1"> Hello, World! </div>

								<img className="handWave" src="https://img.icons8.com/emoji/256/000000/waving-hand-emoji.png" />

								<div className="aboutMeText2">
									I am a Computer Science Undergraduate on my fourth year in <b> California State University, East Bay. </b>
								</div>

								<div className="aboutMeText3">
									I have a keen interest in Software Development and have worked on several projects that span from Desktop, Mobile,
									and Web Applications.
								</div>

								<div className="aboutMeText4">I enjoy building things a lot!</div>
							</div>
						</div>

						<div className="funFactContainer">
							<div className="funFactTextContainer">
								<div className="imgCircleBackground">
									<img className="roblox" src={require("../images/roblox.png")} />
								</div>
								<div className="funFactText">
									I first learned how to program with Lua when I was 10 years old making games on Roblox, one of which has over
									100k+ visits.
								</div>
							</div>

							<div className="funFactTextContainer">
								<div className="imgCircleBackground">
									<img className="guitar" src={require("../images/guitar.svg")} />
								</div>
								<div className="funFactText">
									On my spare time, I like to play the guitar, work on personal projects, and participate in coding competitions!
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="educationContainer">
				<div
					className="educationParallax"
					data-parallax="scroll"
					data-z-index="0"
					data-image-src={require("../images/background2.jpg")}
					data-position-x="-160px 100px"
					data-position-y="-500px 0px"
				>
					<div className="educationTextContainer">
						<div className="educationText"> Education </div>
					</div>
				</div>

				<div className="educationInfoContainer">
					<div className="heightEqualizer">
						<div className="educationInfoTextContainer">
							<img class="circular--landscape eastbay" src={require("../images/eastbay.png")} />

							<div className="educationInfoTextContainer2">
								<div className="educationInfoText1"> California State University, East Bay </div>

								<div className="educationInfoText2"> Bachelor of Science in Computer Science </div>

								<div className="educationInfoText3"> Class of 2021 </div>

								<div className="educationInfoText4">
									<b> Related Coursework: </b>
								</div>

								<div className="educationInfoText5">
									Computer Science I & II (C++), Data Structures and Algorithms, Computer Architecture, Software Engineering,
									Automata and Computation, Operating Systems, Computer Networks.
								</div>
							</div>
						</div>

						<div className="extracurrTextContainer">
							<div className="imgCircleBackground">
								<img className="IEEEImage" src={require("../images/IEEE.png")} />
							</div>
							<div className="extracurrText">
								Member of the <b> IEEE </b> in CSU East Bay. Competed in the <b> IEEEXtreme Hackathon </b> with two other people,
								placing 43rd out of 170 teams!
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="projectsContainer">
				<div
					className="projectsParallax"
					data-parallax="scroll"
					data-z-index="0"
					data-image-src={require("../images/background3.jpeg")}
					data-position-x="-160px 100px"
					data-position-y="-500px 0px"
				>
					<div className="projectsTextContainer">
						<div className="projectsText"> Projects </div>
					</div>
				</div>

				<div className="projectsAllContainer">
					<div className="heightEqualizer">
						<div className="projectsFirstContainer">
							<div className="projectsInfoContainer">
								<img className="projectIcon" src={require("../images/algointeract.png")} />
								<div className="projectContainer">
									<div className="projectTitle"> Algo-Interact</div>

									<div className="projectSubtitle"> React & Django Web App</div>

									<div className="projectText">A Computer Science Hub for students who are eager to learn and contribute.</div>

									<div className="projectBottomContainer">
										<a href="https://github.com/jaygentallan/Algo-Interact" target="_blank" className="githubLink">
											<img src={require("../images/github.svg")} className="githubIcon" />
										</a>

										<a href="https://algointeract.com" target="_blank" className="algointeractLink">
											Visit the website
										</a>
									</div>
								</div>
							</div>

							<div className="projectsInfoContainer">
								<img className="projectIcon" src={require("../images/amc.png")} />
								<div className="projectContainer">
									<div className="projectTitle"> AMC Crew</div>

									<div className="projectSubtitle"> Flutter Mobile App</div>

									<div className="projectText">An app for my coworkers to easily communicate and view their schedules.</div>

									<div className="projectBottomContainer">
										<a href="https://github.com/jaygentallan/Algo-Interact" target="_blank" className="githubLink">
											<img src={require("../images/github.svg")} className="githubIcon" />
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="projectsSecondContainer">
							<div className="projectsInfoContainer">
								<img className="projectIcon" src={require("../images/taskplus.png")} />
								<div className="projectContainer">
									<div className="projectTitle"> Task+</div>

									<div className="projectSubtitle"> Flutter Mobile App</div>

									<div className="projectText">A task managing mobile application to help with daily tasks and goals.</div>

									<div className="projectBottomContainer">
										<a href="https://github.com/jaygentallan/Algo-Interact" target="_blank" className="githubLink">
											<img src={require("../images/github.svg")} className="githubIcon" />
										</a>
									</div>
								</div>
							</div>

							<div className="projectsInfoContainer">
								<img className="projectIcon" src={require("../images/pathfinding.png")} />
								<div className="projectContainer">
									<div className="projectTitle"> A-Star Pathfinding Visualizer</div>

									<div className="projectSubtitle"> C++ & SFML Desktop App</div>

									<div className="projectText">A desktop visualizer that uses the A-Star search algorithm to solve a maze.</div>

									<div className="projectBottomContainer">
										<a href="https://github.com/jaygentallan/Algo-Interact" target="_blank" className="githubLink">
											<img src={require("../images/github.svg")} className="githubIcon" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="skillsContainer">
				<div
					className="skillsParallax"
					data-parallax="scroll"
					data-z-index="0"
					data-image-src={require("../images/background4.jpg")}
					data-position-x="-160px 100px"
					data-position-y="-500px 0px"
				>
					<div className="skillsTextContainer">
						<div className="skillsText"> Skills / Tools </div>
					</div>
				</div>

				<div className="skillsInfoContainer">
					<div className="heightEqualizer">
						<div className="skillsInfoTextContainer">
							<div className="skillTitle"> Languages </div>

							<div className="allSkillsContainer">
								<div className="skillContainer">
									<img class="circular--landscape skill" src={require("../images/cpp.svg")} />
									<div className="skillText">C++</div>
								</div>
								<div className="skillContainer">
									<img class="circular--landscape skill" src={require("../images/python.svg")} />
									<div className="skillText">Python</div>
								</div>
								<div className="skillContainer">
									<img class="circular--landscape skill" src={require("../images/javascript.svg")} />
									<div className="skillText">Javascript</div>
								</div>
								<div className="skillContainer">
									<img class="circular--landscape skill" src={require("../images/dart.png")} />
									<div className="skillText">Dart</div>
								</div>
								<div className="skillContainer">
									<img class="circular--landscape skill" src={require("../images/rust.png")} />
									<div className="skillText">Rust</div>
								</div>
							</div>
						</div>

						<div className="skillsInfoTextContainer">
							<div className="skillTitle"> Frameworks </div>

							<div className="allSkillsContainer">
								<div className="skillContainer">
									<img class="circular--landscape skill" src={require("../images/react.svg")} />
									<div className="skillText">React</div>
								</div>
								<div className="skillContainer">
									<img class="circular--landscape skill" src={require("../images/django.svg")} />
									<div className="skillText">Django</div>
								</div>
								<div className="skillContainer">
									<img class="circular--landscape skill" src={require("../images/git.svg")} />
									<div className="skillText">Git</div>
								</div>
								<div className="skillContainer">
									<img class="circular--landscape skill" src={require("../images/flutter.png")} />
									<div className="skillText">Flutter</div>
								</div>
								<div className="skillContainer">
									<img class="circular--landscape skill" src={require("../images/kivy.png")} />
									<div className="skillText">Kivy</div>
								</div>
								<div className="skillContainer">
									<img class="circular--landscape skill" src={require("../images/sfml.png")} />
									<div className="skillText">SFML</div>
								</div>
							</div>
						</div>
						<div className="skillsInfoTextContainer">
							<div className="skillTitle"> Others </div>

							<div className="allSkillsContainer">
								<div className="skillContainer">
									<img class="circular--landscape skill" src={require("../images/aws.png")} />
									<div className="skillText">AWS</div>
								</div>
								<div className="skillContainer">
									<img class="circular--landscape skill" src={require("../images/gcp.png")} />
									<div className="skillText">GCP</div>
								</div>
								<div className="skillContainer">
									<img class="circular--landscape skill" src={require("../images/firebase.png")} />
									<div className="skillText">Firebase</div>
								</div>
								<div className="skillContainer">
									<img class="circular--landscape skill" src={require("../images/heroku.svg")} />
									<div className="skillText">Heroku</div>
								</div>
								<div className="skillContainer">
									<img class="circular--landscape skill" src={require("../images/githubskill.svg")} />
									<div className="skillText">Github</div>
								</div>
								<div className="skillContainer">
									<img class="circular--landscape skill" src={require("../images/postgresql.svg")} />
									<div className="skillText">PostgreSQL</div>
								</div>
								<div className="skillContainer">
									<img class="circular--landscape skill" src={require("../images/linux.svg")} />
									<div className="skillText">Linux</div>
								</div>
								<div className="skillContainer">
									<img class="circular--landscape skill" src={require("../images/vim.png")} />
									<div className="skillText">Vim</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
