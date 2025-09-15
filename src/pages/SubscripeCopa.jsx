// src/App.jsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

export default function SubscribeCopa() {
    return (
        <div className="flex flex-col">
            <Header />
            <div className="max-w-8/12 mx-auto w-full px-4 shadow-2xl">
                <Hero />
                <About />
            </div>
            <Footer />
        </div>
    );
}

