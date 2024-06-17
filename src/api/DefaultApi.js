/**
 * tg
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */



import ApiClient from "../ApiClient";

/**
* Default service.
* @module api/DefaultApi
* @version 1.0.0
*/
export default class DefaultApi extends ApiClient {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    */
    constructor() {
      super();
      this.baseURL = null;
    }


    /**
     * 未命名接口
     * @param {String} useType 
     * @return {Promise<Object>}
     */
    async phGetPosterPost(useType) {
      let postBody = null;
      // verify the required parameter 'useType' is set
      if (useType === undefined || useType === null) {
        throw new Error("Missing the required parameter 'useType' when calling phGetPosterPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'useType': useType
      };

      let authNames = [];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.callApi(
        '/ph_getPoster', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


}
