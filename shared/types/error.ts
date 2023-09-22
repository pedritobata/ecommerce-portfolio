export default class GenericError {
  constructor(
    public _message: string,
    public _title?: string,
    public _stackTrace?: string,
    public _status?: number
  ) {}

  get message() {
    return this._message || "Something went wrong";
  }
}
