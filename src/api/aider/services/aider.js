'use strict';

/**
 * aider service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::aider.aider');
