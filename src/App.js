import React from 'react';
import './app.css';
import SkillElement from './SkillElement/SkillElement';
import { FiMail } from 'react-icons/fi';
import { FaPhone, FaLinkedin } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';

const App = () => {
    const [toggleEnglish, setToggleEnglish] = React.useState(true);

    const englishOn = () => {
        setToggleEnglish(true);
    };

    const englishOff = () => {
        setToggleEnglish(false);
    };

    return (
        <div className = 'app'>
            { toggleEnglish ? (
                <div className = 'app__en'>
                    <div className = 'app__en-header'>
                        <h1>Vasil Botsev</h1>
                        <h2>Education, Skills & Experience</h2>
                        <div className = 'app__en-header_switch'>
                            <b>EN</b>
                            <span>/</span>
                            <p onClick = { englishOff } className = 'app__en-header_switchhover'>БГ</p>
                        </div>
                    </div>
                    <div className = 'app__en-content'>
                        <div className = 'app__en-content_sidebar'>
                            <div className = 'app__en-content_sidebar_education'>
                                <h2>Education</h2>
                                <p>• PMG "Acad. Sergey P. Korolyov", Blagoevgrad (2014 - 2019)</p>
                                <p>• Sofia University "St. Kliment Ohridski", Faculty of Mathematics and Informatics, Software Engineering (2019 - 2021)</p>
                            </div>
                            <div className = 'sidebar_line'></div>
                            <div className = 'app__en-content_sidebar_language'>
                                <h2>Languages</h2>
                                <p>• English</p>
                                <p>• Bulgarian</p>
                            </div>
                            <div className = 'sidebar_line'></div>
                            <div className = 'app__en-content_sidebar_info'>
                                <h2>Information</h2>
                                <div className = 'info_row'>
                                    <FaMapMarkerAlt className = 'react_icon'></FaMapMarkerAlt>
                                    <p>Blagoevgrad, Bulgaria</p>
                                </div>
                                <div className = 'info_row'>
                                    <FiMail className = 'react_icon'></FiMail>
                                    <p>vaskobotsev@gmail.com</p>
                                </div>
                                <div className = 'info_row'>
                                    <FaPhone className = 'react_icon'></FaPhone>
                                    <p>+359 87 960 4310</p>
                                </div>
                                <div className = 'info_row'>
                                    <FaLinkedin  className = 'react_icon'></FaLinkedin >
                                    <a href = 'https://www.linkedin.com/in/vasil-botsev-bba159281/' target='_blank' rel='noreferrer'>LinkedIn</a>
                                </div>
                            </div>
                        </div>
                        <div className = 'app__en-content_sp'>
                            <div className = 'app__en-content_sp_skills'>
                                <h2>• Skills & Experience</h2>
                                <div className = 'elements_container'>
                                    <SkillElement title = { 'React' } color = { '#b5179e' }></SkillElement>
                                    <SkillElement title = { 'JavaScript' } color = { '#7209b7' }></SkillElement>
                                    <SkillElement title = { 'CSS' } color = { '#560bad' }></SkillElement>
                                    <SkillElement title = { 'HTML' } color = { '#480ca8' }></SkillElement>
                                    <SkillElement title = { 'Firebase' } color = { '#3a0ca3' }></SkillElement>
                                    <SkillElement title = { 'GitHub' } color = { '#3f37c9' }></SkillElement>
                                </div>
                                <p>I am a front-end web developer who started learning React in November 2022. My journey began with simple websites, gradually honing my CSS skills by working on Figma designs. While I gained confidence in styling elements, my challenge was creating visually appealing designs from scratch. My projects primarily focused on HTML and CSS, therefore I decided to take on a more functional website without relying on Figma designs. This led me to discover Firebase, which allowed me to gain experience in integrating a back-end server with my front-end code. In the "Projects" section, you can find detailed information about two of my projects: a restaurant site and Gold Bar, a website designed for a local hookah bar. These projects demonstrate my ability to follow designs closely while making necessary modifications and showcase my proficiency in creating functional and interactive websites. Feel free to explore my work further in my GitHub repositories.</p>
                            </div>
                            <div className = 'app__en-content_sp_projects'>
                                <h2>• Projects</h2>
                                <div className = 'app__en-content_sp_projects_project'>
                                    <h3>Restaurant Site</h3>
                                    <h4>by a Figma design</h4>
                                    <div className = 'info_row'>
                                        <span>The website:</span>
                                        <a href = 'https://restaurant-site-fc6f3.web.app' target='_blank' rel='noreferrer'>https://restaurant-site-fc6f3.web.app</a>
                                    </div>
                                    <div className = 'info_row'>
                                        <span>The GitHub repository:</span>
                                        <a href = 'https://github.com/vasko34/restaurant-site.git' target='_blank' rel='noreferrer'>https://github.com/vasko34/restaurant-site.git</a> 
                                    </div>
                                    <div className = 'info_row'>
                                        <span>The Figma design:</span>
                                        <a href = 'https://www.figma.com/file/yvClSI9AZBRX8UaaGEByF3/Modern-UI%2FUX%3A-Gericht?type=design&node-id=0-1&mode=design&t=z7sBTn1xyKgWsEi9-0' target='_blank' rel='noreferrer'>https://www.figma.com/file/yvClSI9AZBRX8UaaGEByF3/...</a>
                                    </div>  
                                    <p>This website is fairly self-explanatory. I allowed myself to make necessary changes while following the design as closely as possible. For example, when implementing media queries for smaller devices, I removed the navigation bar and replaced it with a menu button. Additionally, I changed the flex-direction from row to column in certain sections. After completing the Figma design and ensuring mobile responsiveness, I decided to add overlays for the Log in/Register and Book Table menus, which were not included in the original design. I believe I managed to maintain a consistent style with the other components.</p>                          
                                </div>
                                <div className = 'app__en-content_sp_projects_project'>
                                    <h3>Gold Bar</h3>
                                    <div className = 'info_row'>
                                        <span>The website:</span>
                                        <a href = 'https://gold-bar-4abbb.web.app' target='_blank' rel='noreferrer'>https://gold-bar-4abbb.web.app</a>
                                    </div>
                                    <div className = 'info_row'>
                                        <span>The GitHub repository:</span>
                                        <a href = 'https://github.com/vasko34/gold-bar.git' target='_blank' rel='noreferrer'>https://github.com/vasko34/gold-bar.git</a>
                                    </div>
                                    <p>Gold Bar is a website designed for local use in a hookah bar. The idea is to provide each table in the bar with its own dedicated account. When you enter and choose a table, you will find either a QR code to scan, which will open Gold Bar and log you into the table's account, or a tablet on the table that is already logged into the table's account. To log out of the table's account or to create a new one, you will need a security code managed by the admin account.</p>
                                    <p>In addition to the tables, there is at least one admin account, with the option to create more if necessary. The admin account allows you to update the tobacco library of Gold Bar, view all orders from all tables, track the total number of hookah bowls sold, add new tobaccos to the library and database, delete existing ones, and modify the security code.</p>
                                    <p>The regular account allows you to browse the library with filters for the brand, type, and flavor of the tobaccos. You can customize an unlimited number of hookah bowls, with up to five different tobaccos for each bowl. Once you have finished customizing your hookah bowl, you can either send it directly to the admin using the 'One Click Order' button or add it to your orders using the 'Add To Orders' button. In the orders section, you can store multiple hookah bowls until you are ready to submit them to the admin. Additionally, you have the option to remove bowls from your orders before submitting them.</p>                                    
                                    <p>In the case of using QR codes instead of tablets, an implemented auto log out is in place after 20 minutes, which would be removed if the tablet option is preferred.</p>    
                                    <div className = 'app__en-content_sp_projects_project_accounts'>
                                        <div className = 'app__en-content_sp_projects_project_accounts_account'>
                                            <h5>Regular account</h5>
                                            <p>Username: Table01</p>
                                            <p>Password: Asdf1234</p>
                                        </div>
                                        <div className = 'app__en-content_sp_projects_project_accounts_account'>
                                            <h5>Admin account</h5>
                                            <p>Username: Admin</p>
                                            <p>Password: Qwer9876</p>
                                        </div>
                                    </div>                                 
                                </div>
                                <div className = 'app__en-content_sp_projects_project'>
                                    <h3>My CV</h3>
                                    <div className = 'info_row'>
                                        <span>The GitHub repository:</span>
                                        <a href = 'https://github.com/vasko34/cv-vb.git' target='_blank' rel='noreferrer'>https://github.com/vasko34/cv-vb.git</a>
                                    </div>                                    
                                    <p>This is the GitHub repository for the website you are currently on.</p>
                                </div>
                            </div>
                        </div>                     
                    </div>                    
                </div>
            ) : (
                <div className = 'app__bg'>
                    <div className = 'app__bg-header'>
                        <h1>Васил Боцев</h1>
                        <h2>Образование, Умения и Опит</h2>
                        <div className = 'app__bg-header_switch'>
                            <p onClick = { englishOn } className = 'app__bg-header_switchhover'>EN</p>
                            <span>/</span>
                            <b>БГ</b>
                        </div>
                    </div>
                    <div className = 'app__bg-content'>
                        <div className = 'app__bg-content_sidebar'>
                            <div className = 'app__bg-content_sidebar_education'>
                                <h2>Образование</h2>
                                <p>• ПМГ "Акад. Сергей П. Корольов", Благоевград (2014 - 2019)</p>
                                <p>• Софийски университет "Св. Климент Охридски", Факултет по математика и информатика, Софтуерно инженерство (2019 - 2021)</p>
                            </div>
                            <div className = 'sidebar_line'></div>
                            <div className = 'app__bg-content_sidebar_language'>
                                <h2>Езици</h2>
                                <p>• Английски</p>
                                <p>• Български</p>
                            </div>
                            <div className = 'sidebar_line'></div>
                            <div className = 'app__bg-content_sidebar_info'>
                                <h2>Информация</h2>
                                <div className = 'info_row'>
                                    <FaMapMarkerAlt className = 'react_icon'></FaMapMarkerAlt>
                                    <p>Благоевград, България</p>
                                </div>
                                <div className = 'info_row'>
                                    <FiMail className = 'react_icon'></FiMail>
                                    <p>vaskobotsev@gmail.com</p>
                                </div>
                                <div className = 'info_row'>
                                    <FaPhone className = 'react_icon'></FaPhone>
                                    <p>+359 87 960 4310</p>
                                </div>
                                <div className = 'info_row'>
                                    <FaLinkedin  className = 'react_icon'></FaLinkedin >
                                    <a href = 'https://www.linkedin.com/in/vasil-botsev-bba159281/' target='_blank' rel='noreferrer'>LinkedIn</a>
                                </div>
                            </div>
                        </div>
                        <div className = 'app__bg-content_sp'>
                            <div className = 'app__bg-content_sp_skills'>
                                <h2>• Умения и Опит</h2>
                                <div className = 'elements_container'>
                                    <SkillElement title = { 'React' } color = { '#b5179e' }></SkillElement>
                                    <SkillElement title = { 'JavaScript' } color = { '#7209b7' }></SkillElement>
                                    <SkillElement title = { 'CSS' } color = { '#560bad' }></SkillElement>
                                    <SkillElement title = { 'HTML' } color = { '#480ca8' }></SkillElement>
                                    <SkillElement title = { 'Firebase' } color = { '#3a0ca3' }></SkillElement>
                                    <SkillElement title = { 'GitHub' } color = { '#3f37c9' }></SkillElement>
                                </div>
                                <p>Аз съм front-end web developer, който започна да учи React през ноември 2022 година. Моето учене започна със създаването на прости уеб сайтове и постепенно изграждах уменията си по CSS, като работих върху Figma дизайни. Докато придобивах увереност в стилизирането на елементи, моето предизвикателство беше да създавам визуално привлекателни дизайни от нищото. До тук, проектите ми се фокусираха предимно върху HTML и CSS, поради което реших да създам по-функционален уеб сайт, без да завися от Figma дизайни. Това ме насочи към откриването на Firebase, което ми позволи да придобия опит в интегрирането на back-end сървър с моя front-end код. В секцията "Проекти" можете да намерите подробна информация за двата ми проекта: сайт за ресторант и Gold Bar - уеб сайт, създаден за местен наргиле бар. Тези проекти показват моите умения да следвам дизайните внимателно, като правя необходимите модификации и демонстрират моите познания в създаването на функционални и интерактивни уеб сайтове. Сложил съм и линкове към моите GitHub хранилища.</p>
                            </div>
                            <div className = 'app__bg-content_sp_projects'>
                                <h2>• Проекти</h2>
                                <div className = 'app__bg-content_sp_projects_project'>
                                    <h3>Сайт за ресторант</h3>
                                    <h4>по Figma дизайн</h4>
                                    <div className = 'info_row'>
                                        <span>Уебсайтът:</span>
                                        <a href = 'https://restaurant-site-fc6f3.web.app' target='_blank' rel='noreferrer'>https://restaurant-site-fc6f3.web.app</a>
                                    </div>
                                    <div className = 'info_row'>
                                        <span>GitHub хранилището:</span>
                                        <a href = 'https://github.com/vasko34/restaurant-site.git' target='_blank' rel='noreferrer'>https://github.com/vasko34/restaurant-site.git</a> 
                                    </div>
                                    <div className = 'info_row'>
                                        <span>Figma дизайнът:</span>
                                        <a href = 'https://www.figma.com/file/yvClSI9AZBRX8UaaGEByF3/Modern-UI%2FUX%3A-Gericht?type=design&node-id=0-1&mode=design&t=z7sBTn1xyKgWsEi9-0' target='_blank' rel='noreferrer'>https://www.figma.com/file/yvClSI9AZBRX8UaaGEByF3/...</a>
                                    </div>
                                    <p>За този уебсайт няма много какво да се каже. Позволих си да направя някои промени, като се стремях да се придържам възможно най-точно към дизайна. Например, докато приспособявах сайта за по-малки устройства премахнах енкър таговете (&lt;a&gt;...&lt;/a&gt;) и ги замених с меню бутон. Освен това промених насоката на flex-direction от ред в колона в определени секции. След завършването на Figma дизайна и осигуряването на мобилна адаптивност, реших да добавя оувърлейове за менютата "Log in/Register" и "Book Table", които не бяха включени в оригиналния дизайн, придържайки се към стила му.</p>
                                </div>
                                <div className = 'app__bg-content_sp_projects_project'>
                                    <h3>Голд Бар</h3>
                                    <div className = 'info_row'>
                                        <span>Уебсайтът:</span>
                                        <a href = 'https://gold-bar-4abbb.web.app' target='_blank' rel='noreferrer'>https://gold-bar-4abbb.web.app</a>
                                    </div>
                                    <div className = 'info_row'>
                                        <span>GitHub хранилището:</span>
                                        <a href = 'https://github.com/vasko34/gold-bar.git' target='_blank' rel='noreferrer'>https://github.com/vasko34/gold-bar.git</a>
                                    </div>
                                    <p>Голд Бар е уебсайт, предназначен за местна употреба в наргиле бар. Идеята е да се осигури на всяка маса в кафенето собствен акаунт. Когато влезете и изберете маса, ще намерите или QR код за сканиране, който ще отвори Gold Bar и ще ви логне в акаунта на масата, или таблет, вече логнат в акаунта на масата. За да се излезе от акаунта на масата или да се създаде нов акаунт, ще се изисква код за сигурност, управляван от акаунта на админа.</p>
                                    <p>Освен акаунтите за масите, има поне един админ акаунт, с възможност за създаване на повече, ако е необходимо. Админ акаунтът ви позволява да актуализирате библиотеката с тютюни за Gold Bar, да преглеждате всички поръчки от всички маси, да проследявате броя продадени чашки, да добавяте нови тютюни към библиотеката и базата данни, да изтривате съществуващи тютюни и да променяте кода за сигурност.</p>
                                    <p>Обикновеният акаунт ви позволява да разглеждате библиотеката с тютюни, с филтри за марка, вид и вкус. Можете да персонализирате неограничен брой чашки, с до пет различни тютюна за всяка чашка. След като приключите с персонализирането на вашата чашка, можете да я изпратите директно на админа, използвайки бутона "One Click Order", или да я добавите към вашите поръчки с бутона "Add To Orders". В секцията с поръчки можете да съхранявате множество чашки, докато не станете готови да ги изпратите на админа. Освен това имате възможност да премахвате чашките от вашите поръчки, преди да ги изпратите.</p>
                                    <p>В случай на използване на QR кодове вместо таблети, е имплементирано автоматично излизане от акаунта след 20 минути, което би било премахнато, ако се предпочете опцията с таблетите.</p>
                                    <div className = 'app__bg-content_sp_projects_project_accounts'>
                                        <div className = 'app__bg-content_sp_projects_project_accounts_account'>
                                            <h5>Нормален акаунт</h5>
                                            <p>Юзърнейм: Table01</p>
                                            <p>Парола: Asdf1234</p>
                                        </div>
                                        <div className = 'app__bg-content_sp_projects_project_accounts_account'>
                                            <h5>Админ акаунт</h5>
                                            <p>Юзърнейм: Admin</p>
                                            <p>Парола: Qwer9876</p>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'app__bg-content_sp_projects_project'>
                                    <h3>Моето CV</h3>
                                    <div className = 'info_row'>
                                        <span>GitHub хранилището:</span>
                                        <a href = 'https://github.com/vasko34/cv-vb.git' target='_blank' rel='noreferrer'>https://github.com/vasko34/cv-vb.git</a>
                                    </div> 
                                    <p>Това е GitHub хранилището за сайта, на който се намирате в момента.</p>
                                </div>
                            </div>
                        </div>  
                    </div>                                  
                </div>
            )}
        </div>
    );
};

export default App;