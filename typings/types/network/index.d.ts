/// <reference path="request.ts" />

interface requestMethod {
  /** HTTP 请求 OPTIONS */
  OPTIONS: string;
  /** HTTP 请求 GET */
  GET: string;
  /** HTTP 请求 HEAD */
  HEAD: string;
  /** HTTP 请求 POST */
  POST: string;
  /** HTTP 请求 PUT */
  PUT: string;
  /** HTTP 请求 DELETE */
  DELETE: string;
  /** HTTP 请求 TRACE */
  TRACE: string;
  /** HTTP 请求 CONNECT */
  CONNECT: string;
}