import type { Schema, Attribute } from '@strapi/strapi';

export interface TechTechnologies extends Schema.Component {
  collectionName: 'components_tech_technologies';
  info: {
    displayName: 'technologies';
    icon: 'bulletList';
  };
  attributes: {
    frontend: Attribute.String;
    backend: Attribute.String;
    database: Attribute.String;
    others: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'tech.technologies': TechTechnologies;
    }
  }
}
