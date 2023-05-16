import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {}
};

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {}
};

async function getAuthToken() {
  const accessToken = await getData('accessToken');
  return accessToken;
}

function setAuthToken(accessToken: string) {
  storeData('accessToken', accessToken);
}

const removeAuthToken = () => removeData('accessToken');

export {
  storeData,
  getData,
  removeData,
  getAuthToken,
  setAuthToken,
  removeAuthToken,
};
