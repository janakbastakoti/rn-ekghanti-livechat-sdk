import AsyncStorage from '@react-native-async-storage/async-storage';

let instance: any;
export class LocalDb {
  instanceId: string;
  constructor() {
    if (instance) {
      throw new Error('Duplicate instance.');
    }
    this.instanceId = 'instanceId';
  }
 setInstanceId(instanceId: any, callback?: any) {
    try {
      AsyncStorage.setItem(
        this.instanceId,
        JSON.stringify(instanceId),
        error => callback && callback(error),
      );
      callback && callback(true);
    } catch (error) {
      console.log('Error while setting session', error);
    }
  }
}


export default new LocalDb();