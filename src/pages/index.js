import Link from '@docusaurus/Link';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

import 'yummacss/dist/yumma.css';

const Index = () => {
    const { siteConfig } = useDocusaurusContext();
    return (
        <div>
            <Header appName={siteConfig.title} />
            <section className='lg:px-18 pos-r pt-4 px-4'>
                <div className='lg:py-18 mx-auto py-4 sm:py-16'>
                    <div className='ta-c'>
                        <h1 className='fs-6xl'>A Reabertura da Skylux</h1>
                        <p className='fs-lg lh-5 mt-2'>
                            Brevemente...
                        </p>
                        <div className='cg-6 ins mt-3'>
                            <Link to='/blog' className='btn-d-cyan-2 fw-600 t-white h:t-white'>Ir para o Início</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer appName={siteConfig.title} />
        </div>
    );
}
export default Index;