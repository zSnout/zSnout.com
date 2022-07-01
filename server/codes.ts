export enum StatusCode {
  /**
   * The request succeeded. The result meaning of "success" depends on the HTTP method:
   * - `GET`: The resource has been fetched and transmitted in the message body.
   * - `POST`: The resource describing the result of the action is transmitted in the message body.
   */
  OK = 200,

  /** The request succeeded, and a new resource was created as a result. This is typically the response sent after `POST` requests, or some `PUT` requests. */
  Created = 201,

  /** The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing. */
  Accepted = 202,

  /** The server could not understand the request due to invalid syntax. */
  BadRequest = 400,

  /** Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested responses. */
  Unauthorized = 401,

  /** The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike `401 Unauthorized`, the client's identity is known to the server. */
  Forbidden = 403,

  /** The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of `403 Forbidden` to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web. */
  NotFound = 404,

  /** This response is sent when a request conflicts with the current state of the server. */
  Conflict = 409,

  /** The server has encountered a situation it does not know how to handle. */
  InternalServerError = 500,

  /** The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the Retry-After HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached. */
  ServiceUnavailable = 503,
}
