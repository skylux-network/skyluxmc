import Link from '@docusaurus/Link';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from '@theme/Layout';

import 'yummacss/dist/yumma.css';

export default function Index() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout>
            <section className='lg:px-18 pos-r pt-4 px-4 ins'>
                <div className='lg:py-18 mx-auto py-4 sm:py-16' style={{ maxWidth: '49rem' }}>
                    <div className='ta-c'>
                        <h1 className='fs-6xl'>Bem-vindo à {siteConfig.title}</h1>
                        <p className='fs-lg lh-5 mt-2'>
                            Somos um servidor de Minecraft com modalidades populares!
                        </p>
                        <div className='cg-6 ins mt-3'>
                            <Link to='/docs/general' className='bg-d-cyan-2 p-1 px-2 rad-4 fw-700 fw-600 t-white h:t-white'>Vamos a isso!</Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}