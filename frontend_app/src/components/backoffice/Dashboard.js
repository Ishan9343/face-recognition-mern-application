import "../../css/Dashboard.css"
import { Menu } from "./Menu"


export const Dashboard = () => {

    return (
        <div className="container dashboard">
            <div className="row">
                <div className="col-lg-3 my-box left-side">
                    <Menu />

                </div>
                <div className="col-lg-9 right-side">
                    <div className="row">
                        <p>Artificial intelligence is the simulation of human intelligence process
                            by machines, especialy computer systems.<hr/>
                            1. Often, what they refer to as AI is simply a component of the technology, such as machine learning and it has some subsets such as machine learning and deep learning. <br/> <br/>
                            2.AI requires a foundation of specialized hardware and software for writing and training machine learning algorithms. In general, AI systems work by ingesting large amounts of labeled training data, analyzing the data for correlations and patterns, and using these patterns to make predictions about future states. This aspect of AI programming focuses on acquiring data and creating rules for how to turn it into actionable information. This aspect of AI programming is designed to continually fine-tune algorithms and ensure they provide the most accurate results possible. <br/> <br/>
                            3.Differences between AI, machine learning and deep learning AI, machine learning and deep learning are common terms in enterprise IT and sometimes used interchangeably, especially by companies in their marketing materials. <br/> <br/>
                            4.The term AI, coined in the 1950s, refers to the simulation of human intelligence by machines. Technologies that come under the umbrella of AI include machine learning and deep learning. Deep learning's use of artificial neural network structure is the underpinning of recent advances in AI, including self-driving cars and ChatGPT. The rapidly expanding population of generative AI tools will be important in fields ranging from education and marketing to product design.<br/><br/>
                            5.			
AI has become central to many of today's largest and most successful companies, including Alphabet, Apple, Microsoft and Meta, where AI technologies are used to improve operations and outpace competitors. At Alphabet subsidiary Google, for example, AI is central to its search engine, Waymo's self-driving cars and Google Brain, which invented the transformer neural network architecture that underpins the recent breakthroughs in natural language processing.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}