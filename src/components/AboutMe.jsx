
import { Code, User, Briefcase } from "lucide-react";


export const AboutMeSection = () => {
    return  (
    <section id ="about"
    className=" py-24 px-20 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold mb-8 text-center">
                About 
                <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className = "text-2xl font-bold text-center"> Passionate Developer & Tech Creator</h3>

                    <p className="text-muted-foreground">
                        I am a Computer Science graduate turning ideas into interactive applications with modern technologies.
                        I enjoy creating clean and user-friendly software that solves real problems.
                    </p>

                     <p className="text-muted-foreground">
                        I have experience working with a variety of tools and frameworks, constantly learning new technologies to stay up-to-date and deliver
                        high-quality results.
                    </p>

                    <p className="text-muted-foreground">
                        I am motivated, detail-oriented, and enjoy taking on new challenges,
                        always striving to improve as a developer and make a positive impact through my work.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center " >
                        <a href= "#contact" className="cosmic-button">
                            {" "}
                            Contact Me
                        </a>

                         <a href= "#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10  transition-colors duration-300">
                            {" "}
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className ="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development</h4>
                                <p className="text-muted-foreground">
                                  Creating bla bla bla bla bla bla bla    
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className ="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development</h4>
                                <p className="text-muted-foreground">
                                  Creating bla bla bla bla bla bla bla    
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className ="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development</h4>
                                <p className="text-muted-foreground">
                                  Creating bla bla bla bla bla bla bla    
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                
                    
            </div>

                

        </div>

    </section>

)}