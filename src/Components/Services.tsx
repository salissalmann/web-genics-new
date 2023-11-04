
const Services = () => {

    const services = [
        {
            bgColor: "200",
            textColor: "white",
            image:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/32a2c9c5-2156-4396-8cba-30e96e8bc59a?apiKey=7655e50a14c74a62b7c703afca66aadd&",
            title: "Software Development",
            description:
                "Revolutionize your business with Webgenics' bespoke software solutions. Our expert team ensures tailored, efficient, and quality software for your success.",
        },
        {
            bgColor: "300",
            textColor: "black",
            image:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/ae1c11cf-3fd2-41e7-afb0-25c4ffa72224?apiKey=7655e50a14c74a62b7c703afca66aadd&",
            title: "UI/UX Design",
            description:
                "Transform user experiences with Webgenics' UI/UX design services. Our creative team crafts intuitive, visually engaging interfaces for an exceptional digital journey.",
        },
        {
            bgColor: "100",
            textColor: "black",
            image:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/c7da3736-8841-464b-adf3-a03393539b01?apiKey=7655e50a14c74a62b7c703afca66aadd&",
            title: "Software Testing",
            description:
                "Ensure software reliability with Webgenics' comprehensive testing services. Our skilled QA team guarantees bug-free, high-performance applications for a seamless user experience.",
        },
        {
            bgColor: "300",
            textColor: "black",
            image:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/30e197e9-056a-459a-a380-1eed662253c0?apiKey=7655e50a14c74a62b7c703afca66aadd&",
            title: "Internet of Things",
            description:
                "Unlock the potential of the Internet of Things (IoT) with Webgenics. Our IoT solutions connect and optimize devices for enhanced data insights and improved efficiency.",
        },
        {
            bgColor: "100",
            textColor: "black",
            image:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/f8237063-f788-455a-9586-e166e2887592?apiKey=7655e50a14c74a62b7c703afca66aadd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8237063-f788-455a-9586-e166e2887592?apiKey=7655e50a14c74a62b7c703afca66aadd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8237063-f788-455a-9586-e166e2887592?apiKey=7655e50a14c74a62b7c703afca66aadd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8237063-f788-455a-9586-e166e2887592?apiKey=7655e50a14c74a62b7c703afca66aadd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8237063-f788-455a-9586-e166e2887592?apiKey=7655e50a14c74a62b7c703afca66aadd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8237063-f788-455a-9586-e166e2887592?apiKey=7655e50a14c74a62b7c703afca66aadd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8237063-f788-455a-9586-e166e2887592?apiKey=7655e50a14c74a62b7c703afca66aadd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8237063-f788-455a-9586-e166e2887592?apiKey=7655e50a14c74a62b7c703afca66aadd&",
            title: "Cyber Security",
            description:
                "Safeguard your digital assets with Webgenics' robust cybersecurity services. Our experts protect your data, networks, and systems, ensuring peace of mind in an increasingly connected world.",
        },
        {
            bgColor: "200",
            textColor: "white",
            image:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/36a549df-40ce-4ee4-80b2-dfba6db60854?apiKey=7655e50a14c74a62b7c703afca66aadd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/36a549df-40ce-4ee4-80b2-dfba6db60854?apiKey=7655e50a14c74a62b7c703afca66aadd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/36a549df-40ce-4ee4-80b2-dfba6db60854?apiKey=7655e50a14c74a62b7c703afca66aadd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/36a549df-40ce-4ee4-80b2-dfba6db60854?apiKey=7655e50a14c74a62b7c703afca66aadd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/36a549df-40ce-4ee4-80b2-dfba6db60854?apiKey=7655e50a14c74a62b7c703afca66aadd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/36a549df-40ce-4ee4-80b2-dfba6db60854?apiKey=7655e50a14c74a62b7c703afca66aadd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/36a549df-40ce-4ee4-80b2-dfba6db60854?apiKey=7655e50a14c74a62b7c703afca66aadd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/36a549df-40ce-4ee4-80b2-dfba6db60854?apiKey=7655e50a14c74a62b7c703afca66aadd&",
            title: "AI & Automation",
            description:
                "Empower your business with AI and Automation solutions from Webgenics. Our cutting-edge technology streamlines processes and enhances decision-making, driving efficiency and innovation.",
        },
    ];


    return (
        <section className="flex flex-col items-center justify-center text-gray-600 font-nunito">
            <div className="container px-2 py-24 mx-auto w-3/4">
                <div className="flex flex-col text-center w-full mb-4">
                    <h1
                        className="sm:text-3xl text-3xl font-medium title-font mb-4 text-secondary-300"
                    >
                        Services <span className="text-gray-900">we are providing</span>
                    </h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    {services.map((service) => (
                        <div
                            className="lg:w-1/3 sm:w-1/2"
                        >
                            <div className={`px-8 py-14 relative z-10 w-full bg-tertiary-${service.bgColor}`}>
                                <img
                                    loading="lazy"
                                    src={service.image}
                                    alt="Webgenics Logo"
                                    className="h-15 w-20"
                                />
                                <h1 className={`tracking-widest text-2xl font-oxygen text-${service.textColor} mb-1`}>
                                    {service.title}
                                </h1>
                                <p className={`leading-relaxed text-${service.textColor} font-nunito text-sm`}>
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
