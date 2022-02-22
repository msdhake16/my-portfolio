import React from 'react';

const SocialComponent = ({social = []}) => {
   
    let networks = social.map( (element) => {
        return <li key={element.name}>
                   <a target="_blank" rel="noreferrer noopener" href={element.url}>
                          <i className={element.className}>
                          </i>
                    </a>
                </li>
    })

    return (
        <div>{networks}</div>
    )
}

export default SocialComponent;  