import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';


function Main({ children, fullPage }) {
    return (
        <main className='w-full min-h-[77vh] pt-5 pb-[80px] px-[24px] md:px-[60px]'>
            {children}
        </main>
    )
}

const PageMainContainer = React.memo(
    ({
        title,
        description,
        pageClassName,
        children,
        fullPage,
    }) => {
        useEffect(() => {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }, [])

        return (
            <React.Fragment>
                <Helmet>
                    {title && <title> {`${title} ${title ? '| Lizmotors' : 'Lizmotors'}`} </title>}
                    {description && <meta name="description" content={description} />}
                </Helmet>
                <Main className={`page ${pageClassName}`}>
                    {children}
                </Main>
            </React.Fragment>
        )
    }
)

PageMainContainer.propTypes = {
    children: PropTypes.any.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    pageClassName: PropTypes.string,
};

export default PageMainContainer;