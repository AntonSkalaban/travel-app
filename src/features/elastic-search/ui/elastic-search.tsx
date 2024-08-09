"use client";
import { ChangeEvent, FC, KeyboardEvent, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useClickOutside } from "shared/model";

import Close from "./images/Close.svg";
import Search from "./images/Search.svg";
import { Suggestions } from "./suggestions/ui/suggestions";
import { ElasticSearchProps } from "../model";
import styles from "./styles.module.scss";

export const ElasticSearch: FC<ElasticSearchProps> = ({ initialValue }) => {
  const router = useRouter();
  const path = usePathname();
  const [searchValue, setSearchValue] = useState(initialValue);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchBarRef = useClickOutside(() => setShowSuggestions(false));

  const handleSearch = (value: string) => {
    return router.push(`${path}${value && `/?q=${value}`}`);
  };

  const handleClearClick = () => {
    setSearchValue("");
    handleSearch("");
    setShowSuggestions(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setShowSuggestions(true);
  };

  const hanldeKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch(searchValue);
  };

  const handleSuggestionClick = (value: string) => {
    setSearchValue(value);
    handleSearch(value);
  };

  return (
    <div className={styles["container"]} ref={searchBarRef}>
      <div className={styles["search-bar"]}>
        <Search className={styles["search-bar__search"]} />

        <input
          className={styles["search-bar__input"]}
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleChange}
          onKeyDown={hanldeKeyDown}
        />

        {searchValue && (
          <button
            className={styles["search-bar__close-btn"]}
            onClick={handleClearClick}
          >
            <Close />
          </button>
        )}
      </div>

      {showSuggestions && (
        <Suggestions
          searchValue={searchValue}
          onClick={handleSuggestionClick}
        />
      )}
    </div>
  );
};
