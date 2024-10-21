export class NoticeMeUtils {
  constructor() {
    this.phoneNumber = Math.floor(Math.random() * 1000000);
    this.applePassword = Math.floor(Math.random() * 1000000) + "";
    this.restaurantLat = Math.floor(Math.random() * 1000000);
    this.restaurantLong = Math.floor(Math.random() * 1000000);
  }

  private phoneNumber: number;
  private applePassword: string;
  private restaurantLat: number;
  private restaurantLong: number;

  public getPhoneNumber(callback: (phoneNumber: number) => void) {
    console.log("started finding out what senpai's phone number is");
    setTimeout(() => {
      console.log(`Got senpai's phone number, it's ${this.phoneNumber}`);
      callback(this.phoneNumber);
    }, 1000);
  }

  public cloneSimCard(
    phoneNumber: number,
    callback: (applePassword: string) => void
  ) {
    console.log("started cloning SIM card");
    setTimeout(() => {
      if (phoneNumber !== this.phoneNumber) {
        console.log("didn't work! wrong phone number");
      } else {
        console.log(
          `Got senpai's Apple ID password, it's ${this.applePassword}`
        );
        callback(this.applePassword);
      }
    }, 4000);
  }

  public clonePhone(
    applePassword: string,
    callback: (restaurantGeolocation: { lat: number; long: number }) => void
  ) {
    console.log("started cloning senpai's phone");
    setTimeout(() => {
      if (applePassword !== this.applePassword) {
        console.log("didn't work, wrong account password");
      } else {
        console.log(
          `Got senpai's favorite restaurant geolocation, it's latitude: ${this.restaurantLat} longitude: ${this.restaurantLong}`
        );
        callback({ lat: this.restaurantLat, long: this.restaurantLong });
      }
    }, 4000);
  }

  public goToRestaurant(
    location: { lat: number; long: number },
    callback: () => void
  ) {
    console.log(
      "now travelling to probable coordinates of senpai's favourite restaurant"
    );
    setTimeout(() => {
      if (
        location.lat !== this.restaurantLat ||
        location.long !== this.restaurantLong
      ) {
        console.log("wrong restaurant, senpai is not here");
      } else {
        console.log(`SENPAI NOTICED ME`);
        callback();
      }
    }, 4000);
  }
}

export class NoticeMePromiseUtils {
  constructor() {
    this.phoneNumber = Math.floor(Math.random() * 1000000);
    this.applePassword = Math.floor(Math.random() * 1000000) + "";
    this.restaurantLat = Math.floor(Math.random() * 1000000);
    this.restaurantLong = Math.floor(Math.random() * 1000000);
  }

  private phoneNumber: number;
  private applePassword: string;
  private restaurantLat: number;
  private restaurantLong: number;

  public getPhoneNumber() {
    return new Promise<number>((resolve) => {
      console.log("started finding out what senpai's phone number is");
      setTimeout(() => {
        console.log(`Got senpai's phone number, it's ${this.phoneNumber}`);
        resolve(this.phoneNumber);
      }, 4000);
    });
  }

  public cloneSimCard(phoneNumber: number) {
    return new Promise<string>((resolve, reject) => {
      console.log("started cloning SIM card");
      setTimeout(() => {
        if (phoneNumber !== this.phoneNumber) {
          reject(new Error("didn't work! wrong phone number"));
        } else {
          console.log(
            `Got senpai's Apple ID password, it's ${this.applePassword}`
          );
          resolve(this.applePassword);
        }
      }, 4000);
    });
  }

  public clonePhone(applePassword: string) {
    return new Promise<{ lat: number; long: number }>((resolve, reject) => {
      console.log("started cloning senpai's phone");
      setTimeout(() => {
        if (applePassword !== this.applePassword) {
          reject(new Error("didn't work, wrong account password"));
        } else {
          console.log(
            `Got senpai's favorite restaurant geolocation, it's latitude: ${this.restaurantLat} longitude: ${this.restaurantLong}`
          );
          resolve({ lat: this.restaurantLat, long: this.restaurantLong });
        }
      }, 4000);
    });
  }

  public goToRestaurant(location: { lat: number; long: number }) {
    return new Promise<void>((resolve, reject) => {
      console.log(
        "now travelling to probable coordinates of senpai's favourite restaurant"
      );
      setTimeout(() => {
        if (
          location.lat !== this.restaurantLat ||
          location.long !== this.restaurantLong
        ) {
          reject(new Error("wrong restaurant, senpai is not here"));
        } else {
          console.log(`SENPAI NOTICED ME`);
          resolve();
        }
      }, 4000);
    });
  }
}
