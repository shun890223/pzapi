# Tg.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**phGetPosterPost**](DefaultApi.md#phGetPosterPost) | **POST** /ph_getPoster | 未命名接口



## phGetPosterPost

> Object phGetPosterPost(useType)

未命名接口

### Example

```javascript
import Tg from 'tg';

let apiInstance = new Tg.DefaultApi();
let useType = "useType_example"; // String | 
apiInstance.phGetPosterPost(useType, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useType** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

