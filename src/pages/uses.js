import React, { Component } from 'react';
import Layout from '../components/layout';
import { uses } from '../../data/uses';

const ItemList = ({ items, parentIndex }) => (
  <ul>
    {items.map((item, itemIndex) => (
      <React.Fragment key={itemIndex}>
        <li key={`parent${parentIndex}-item${itemIndex}`}>
          {item.url ? <a href={item.url}>{item.name}</a> : item.name}
          {item.attributeList && (
            <ul>
              {item.attributeList.map((attribute, attributeIndex) => (
                <li key={`parent${parentIndex}-item${itemIndex}-attribute${attributeIndex}`}>
                  {attribute.url ? <a href={attribute.url}>{attribute.name}</a> : attribute.name}
                </li>
              ))}
            </ul>
          )}
        </li>
      </React.Fragment>
    ))}
  </ul>
);

class UsesPage extends Component {
  render() {
    return (
      <Layout page="Uses" className="uses-page">
        <div className="wrapper">
          <div className="content-container with-margin">
            <h1>What I use</h1>
            <p>
              From casual web browsing to creating content for YouTube, here's a comprehensive list
              of hardware and software that I use on a daily basis to create and consume content.
            </p>
            <p>I enjoy trying out new things so this list will be updated accordingly.</p>
            {uses.map((section, sectionIndex) => (
              <React.Fragment key={sectionIndex}>
                <h2>{section.name}</h2>
                <p>{section.description}</p>
                {section.categoryList &&
                  section.categoryList.map((category, categoryIndex) => (
                    <React.Fragment key={`category${categoryIndex}`}>
                      <h3>{category.name}</h3>
                      <ItemList items={category.list} parentIndex={sectionIndex} />
                    </React.Fragment>
                  ))}
                {section.itemList && (
                  <ItemList items={section.itemList} parentIndex={sectionIndex} />
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
