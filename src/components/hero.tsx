import Icon from "./reusable/Icons";

const Hero = () => {
    return (
        <div className="flex gap-20 mt-16 h-[calc(100vh-64px)]">
            {/* Text Section */}
            <div className="flex-1 flex flex-col justify-center text-white p-8 h-full">
                <h3 className="text-4xl font-bold">Hi, I am</h3>
                <h3 className="text-4xl font-bold text-orange-500">Hom Narayan Amatya</h3>
                <h6 className="text-2xl mt-4 font-semibold">I am a UI/UX Designer</h6>
                <p className="mt-4">
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
                </p>
                <div className="flex gap-4 items-center mt-10">
                    <button className="px-4 py-2 bg-skyBlue rounded-md text-gray-800 font-semibold hover:bg-sky-500 transition-all duration-500 ease-in-out"><Icon icon="fileDownload" /> Resume</button>
                  <Icon icon="gitHub" className="h-8 w-8 cursor-pointer" />
                  <Icon icon="linkedIn" className="h-8 w-8 cursor-pointer" />
                </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex items-center">
                <img
                    src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/417544838_7281816731912373_4343179332867262888_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=9z2Z7mrUws8Q7kNvgG3iMbO&_nc_ht=scontent.fktm3-1.fna&oh=00_AYBTpoL7FTUwQMoXlcPCyMdCufqdpaPrrQtF_WATu8cESQ&oe=66C7A699"
                    alt="Hom Narayan Amatya"
                    className="rounded-full w-96 h-96"
                />
            </div>
        </div>
    );
}

export default Hero;
