/* eslint-disable complexity */
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import Papa from "papaparse";
import imageCompression from "browser-image-compression";
import moment from "./momentConfig";
import mtz from "moment-timezone";
import CONSTANTS, {
  APPRECIATION_VALUES,
  BILLING_PERIODS_MAPS,
  CUSTOM_BILLING_TYPES,
  MOBILE_OS,
  PAYMENT_MODES,
  RECURRING_BILLING_PERIODS,
} from "./constants";
import { appreciationSelectValues, currencySelectValues } from "./selectValues";

export const getToken = () => Cookies.get("access_token");

export const removeToken = () => Cookies.remove("access_token");

export const getUserDetails = () => {
  const token = Cookies.get("access_token");
  let userDetails;
  if (token) {
    try {
      const {
        user_name: userName,
        email,
        user_id: userId,
        email_verified: emailVerified,
        type,
        has_company: hasCompany,
      } = jwt.decode(token);
      userDetails = {
        userName,
        userId,
        email,
        emailVerified,
        type,
        hasCompany,
      };
    } catch (e) {
      removeToken();
    }
  }
  return userDetails;
};

export const isLoggedIn = () => getUserDetails()?.type === "login";
export const isGuestUser = () => getUserDetails()?.type === "guest";

export const numberWithCommas = (x = 0) =>
  x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const getLabelFromValue = (value, field) => {
  const selectedField = field.find((item) => item.value === value);
  return selectedField ? selectedField.label : "";
};

export const sequezeStringLength = (str) =>
  `${str?.slice(0, 5)}....${str?.slice(-5)}`;

export const insertStarsInNumber = (str) => `************${str?.slice(-4)}`;

export const hasEthereumInBrowser = () => {
  if (window.ethereum) {
    return true;
  }
  return false;
};

export const getEthereumFromBrowser = () => {
  if (hasEthereumInBrowser()) {
    return window.ethereum;
  }
  return null;
};

export const requestMetamaskWalletAccounts = async () => {
  const ethereum = getEthereumFromBrowser();
  let primaryWalletAddress = "";
  if (hasEthereumInBrowser && ethereum && ethereum.isMetaMask) {
    try {
      // Request account access if needed
      const [primaryAddress] = await ethereum.request({
        method: "eth_requestAccounts",
      });
      primaryWalletAddress = primaryAddress;
    } catch (error) {
      return null;
    }
  }
  return primaryWalletAddress;
};

export const priceFilterLabel = ({ min, max }) => {
  if (!min) {
    return `Less than $${max}`;
  }
  if (!max) {
    return `More than $${min}`;
  }
  return `$${min} - $${max}`;
};

export const capitalizeFirstLetter = (string) =>
  string?.charAt(0)?.toUpperCase() + string?.slice(1);

export const WALLET_TYPES = {
  ALL: "all",
  ETHEREUM: "eth",
  SOLANA: "sol",
};

export const addressFormatter = (string) => {
  if (!string) {
    return "NA";
  }
  if (string === CONSTANTS.COUNTERTEN_ADMIN_WALLET_ADDRESS) {
    return string;
  }
  return `${string.slice(0, 5)} ... ${string.slice(
    string.length - 5,
    string.length
  )}`;
};

export const cardIssuer = (issuer) => {
  if (issuer === "diners") {
    return "dinersclub";
  }
  return issuer;
};

export const cardNumberFormater = (issuer, last4) => {
  if (issuer === "amex" || issuer === "diners") {
    return `***********${last4}`;
  }
  return `************${last4}`;
};

export const csvToArray = (str, delimiter = ",") => {
  let headers = [];
  let arr = [];
  const parsed = Papa.parse(str, { delimiter });

  if (parsed.data) {
    const { data } = parsed;

    if (data.length > 0) {
      [headers] = data;
    }

    if (data.length > 1) {
      const values = data.slice(1);
      arr = values.map((val) => {
        const obj = {};
        headers.forEach((header, i) => {
          obj[header] = val[i];
        });
        return obj;
      });
    }
  }

  // return the array
  return { arr, headers };
};

export const compressImage = async ({ imageFile, options = {} }) => {
  try {
    const compressedFile = await imageCompression(imageFile, {
      maxIteration: 3,
      initialQuality: 0.7,
      maxWidthOrHeight: 1200,
      maxSizeMB: 1,
      useWebWorker: true,
      ...options,
    });
    return {
      success: true,
      imageFile: compressedFile,
    };
  } catch (error) {
    return {
      success: false,
      imageFile,
    };
  }
};

export const unParseAndDownloadCSV = ({ buyerEmailList, fileName }) => {
  const csv = Papa.unparse(buyerEmailList);
  const csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const csvURL = window.URL.createObjectURL(csvData);
  const eleLink = document.createElement("a");
  eleLink.id = "download-csv-email";
  eleLink.href = csvURL;
  eleLink.setAttribute(
    "download",
    `${fileName}-${moment(moment.now()).format()}.csv`
  );
  eleLink.click();
};

export const checkIsMobileBrowser = () => {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i)
  ) {
    return true;
  }
  return false;
};

export const isWordStartWithVowel = ({ word }) => {
  const vowelRegex = "^[aieouAIEOU].*";
  const matched = word.match(vowelRegex);
  return matched;
};

export const formDataFormatter = ({ data }) => {
  const formData = new FormData();
  Object.keys(data).forEach((attr) => {
    if (Array.isArray(data[attr])) {
      formData.append(attr, JSON.stringify(data[attr]));
    } else if (typeof data[attr] === "boolean") {
      formData.append(attr, data[attr]);
    } else if (data[attr] === "") {
      formData.append(attr, data[attr]);
    } else if (data[attr]) {
      formData.append(attr, data[attr]);
    }
  });

  return formData;
};

export const addHideLayout = ({ item, currentList }) => {
  const newList = [...currentList, item];
  return newList;
};

export const removeHideLayout = ({ item, currentList }) => {
  const newList = currentList.filter((attr) => attr !== item);

  return newList;
};

export const getHideShowPreview = ({
  values,
  setFieldValue,
  formFields,
  item,
}) => {
  const hidePreview = () => {
    const newList = addHideLayout({
      currentList: values[formFields.hideLayouts.name],
      item,
    });
    setFieldValue([formFields.hideLayouts.name], newList);
  };

  const showPreview = () => {
    const newList = removeHideLayout({
      currentList: values[formFields.hideLayouts.name],
      item,
    });
    setFieldValue([formFields.hideLayouts.name], newList);
  };

  return { hidePreview, showPreview };
};

export const hasFeaturedImageCustomizeOptions = (values) => {
  const highImpactCardOptions =
    values.has_high_impact_card &&
    (values.ud_high_impact_card_title1 ||
      values.ud_high_impact_card_title2 ||
      values.ud_high_impact_card_title3 ||
      values.ud_high_impact_card_image ||
      values.ud_high_impact_card_bg_image);

  if (highImpactCardOptions) {
    return true;
  }

  return false;
};

export const hasPreviewPassCustomizationOptions = (values) => {
  const layoutOptions =
    values.nft_image_by_user ||
    values.bg_image_by_user ||
    values.has_default_stats ||
    values.portrait_image_by_user ||
    values.ud_collectible_name;

  if (layoutOptions) {
    return true;
  }

  return false;
};

export const hasAdditionalInfoCustomizeOptions = (values) => {
  const additionalInfoOptions =
    values.has_additional_info && values.ud_additional_info_detail;

  if (additionalInfoOptions) {
    return true;
  }

  return false;
};

export const hasCustomizationOptions = (values) => {
  const layoutOptions =
    values.nft_image_by_user ||
    values.bg_image_by_user ||
    values.has_default_stats ||
    (values.with_portrait_image && values.portrait_image_by_user) ||
    values.ud_collectible_name;

  const highImpactCardOptions =
    values.has_high_impact_card &&
    (values.ud_high_impact_card_title1 ||
      values.ud_high_impact_card_title2 ||
      values.ud_high_impact_card_title3 ||
      values.ud_high_impact_card_image ||
      values.ud_high_impact_card_bg_image);

  const additionalInfoOptions =
    values.has_additional_info && values.ud_additional_info_detail;

  if (layoutOptions || highImpactCardOptions || additionalInfoOptions) {
    return true;
  }

  return false;
};

export const getTzAbbr = () => {
  const tzAbbr = mtz.tz(mtz.tz.guess()).format("z");
  return tzAbbr;
};

export const replaceKeywordInOptionsLabel = ({
  options,
  oldKeyword,
  newKeyword,
}) => {
  const newOptions = options.map((option) => ({
    ...option,
    label: option.label.replace(oldKeyword, newKeyword),
  }));

  return newOptions;
};

export const detectMobileOS = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return MOBILE_OS.IOS;
  }
  if (/Android/i.test(userAgent)) {
    return MOBILE_OS.ANDROID;
  }
  return MOBILE_OS.UNKNOWN;
};

export const getBillingIntervalName = ({
  recurringInterval,
  recurringIntervalCount,
}) => {
  const defaultName = `${recurringIntervalCount} ${recurringInterval}s`;
  switch (Number(recurringIntervalCount)) {
    case 1:
      return BILLING_PERIODS_MAPS[recurringInterval];

    case 4: {
      if (recurringInterval === CUSTOM_BILLING_TYPES.MONTHS) {
        return RECURRING_BILLING_PERIODS.QUARTERLY;
      }
      return defaultName;
    }

    default:
      return defaultName;
  }
};

export const getPriceString = ({ currency, amount }) =>
  `${getLabelFromValue(currency, currencySelectValues)}${Number(amount).toFixed(
    2
  )}`;

export const getRecurringIntervalLabel = ({
  recurringInterval,
  recurringIntervalCount,
}) => {
  let recurringIntervalLabel = recurringInterval;
  if (recurringIntervalCount > 1) {
    recurringIntervalLabel = `${recurringIntervalCount} ${recurringInterval}s`;
  }

  return recurringIntervalLabel;
};

export const getCurrentPriceToken = (values) => {
  let currentPriceText = "";

  if (values?.payment_mode === PAYMENT_MODES.RECURRING) {
    const paymentPlan = values?.payment_plans[0];
    const currency = getLabelFromValue(
      paymentPlan?.currency,
      currencySelectValues
    );
    const price = numberWithCommas(paymentPlan?.price);

    const planText = `${currency}${price}/${
      paymentPlan?.recurring_interval_label || ""
    }`;
    currentPriceText = `From ${planText}`;
  } else if (values?.payment_mode === PAYMENT_MODES.ONETIME) {
    const currency = getLabelFromValue(values?.currency, currencySelectValues);
    const price = numberWithCommas(values?.current_price);
    let appreciation = getLabelFromValue(
      values?.appreciation,
      appreciationSelectValues
    );
    if (values?.appreciation === APPRECIATION_VALUES.FIXED_PRICE) {
      appreciation = "";
    }

    currentPriceText = `${currency}${price} ${
      appreciation ? `(${appreciation})` : ""
    }`;
  }

  return currentPriceText;
};
