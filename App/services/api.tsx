export class Api {
  static baseUrl = "http://192.168.0.4/Turismoapi/public/api";

  static async post<T>(url: string, data: any): Promise<any> {
    const response = await fetch(`${Api.baseUrl}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataResponse = await response.json();

    return {
      statusCode: response.status,
      data: dataResponse,
    };
  }

  static async get<T>(url: string): Promise<any> {
    const response = await fetch(`${Api.baseUrl}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const dataResponse = await response.json();

    return {
      statusCode: response.status,
      data: dataResponse,
    };
  }
}
