import React, { Component } from 'react';
import Layout from '../components/layout';
import { uses } from '../../data/uses';

class UsesPage extends Component {
  render() {
    return (
      <Layout page="Uses" className="uses-page">
        <div className="wrapper">
          <div className="content-container with-margin">
            <h1>Uses</h1>
            <p>All the tech + gear that I use</p>
            {uses.map((section, sectionIndex) => (
              <React.Fragment key={sectionIndex}>
                <h2>{section.name}</h2>
                {section.categoryList &&
                  section.categoryList.map((category, categoryIndex) => (
                    <React.Fragment key={`category${categoryIndex}`}>
                      <h3>{category.name}</h3>
                      <ul>
                        {category.list.map((item, itemIndex) => (
                          <React.Fragment key={itemIndex}>
                            <li key={`category${categoryIndex}-item${itemIndex}`}>
                              {item.url ? <a href={item.url}>{item.name}</a> : item.name}
                              {item.attributeList && (
                                <ul>
                                  {item.attributeList.map((attribute, attributeIndex) => (
                                    <li
                                      key={`category${categoryIndex}-item${itemIndex}-attribute${attributeIndex}`}
                                    >
                                      {attribute.url ? (
                                        <a href={attribute.url}>{attribute.name}</a>
                                      ) : (
                                        attribute.name
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          </React.Fragment>
                        ))}
                      </ul>
                    </React.Fragment>
                  ))}
                {section.itemList && (
                  <ul>
                    {section.itemList.map((item, itemIndex) => (
                      <React.Fragment key={`item${itemIndex}`}>
                        <li>{item.name}</li>
                        {item.attributeList && (
                          <ul>
                            {item.attributeList.map((attribute, attributeIndex) => (
                              <li key={`item${itemIndex}-attribute${attributeIndex}`}>
                                {attribute.url ? (
                                  <a href={attribute.url}>{attribute.name}</a>
                                ) : (
                                  attribute.name
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </React.Fragment>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

export default UsesPage;
