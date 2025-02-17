/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { Checkbox } from '@vaadin/checkbox/src/vaadin-checkbox.js';

/**
 * @deprecated Import `Checkbox` from `@vaadin/checkbox` instead.
 */
export const CheckboxElement = Checkbox;

export * from '@vaadin/checkbox/src/vaadin-checkbox.js';

console.warn('WARNING: Since Vaadin 23.2, "@vaadin/vaadin-checkbox" is deprecated. Use "@vaadin/checkbox" instead.');
