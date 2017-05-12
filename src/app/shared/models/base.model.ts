export class BaseModel {
  private _id: string;

  get id() {
    return this._id;
  }

  get isNew() {
    return this._id === void 0;
  }
}
