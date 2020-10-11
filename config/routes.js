/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  '/': {view: 'pages/homepage'},


  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/
  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝


  'POST /api/user/register': {
    action: 'user/register'
  },

  'POST /api/user/login': {
    action: 'user/login'
  },

  'POST /api/user/changeprofile': {
    action: 'user/changeprofile'
  },

  'POST /api/task/create' : {
    action: 'task/create'
  },

  'GET /api/task/getall' : {
    action: 'task/getall'
  },

  'GET /api/task/delete' : {
    action:  'task/delete'
  },

  'GET /api/task/gettotal': {
    action: 'task/gettotal'
  },

  'POST /api/task/changestatus': {
    action: 'task/changestatus'
  },

  'POST /api/task/getforhelp' : {
    action: 'task/getforhelp'
  }




};
