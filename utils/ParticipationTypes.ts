import { useI18n } from "vue-i18n";

export const PARTICIPATION_TYPES = (): Readonly<Record<number, string>> => {
  const t = useI18n().t;
  return Object.freeze({
    1: t("participation_types.owner"),
    2: t("participation_types.contributed"),
  });
};
