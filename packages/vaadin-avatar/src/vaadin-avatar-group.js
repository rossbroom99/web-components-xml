/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { AvatarGroup } from '@vaadin/avatar-group/src/vaadin-avatar-group.js';

/**
 * @deprecated Import `AvatarGroup` from `@vaadin/avatar-group` instead.
 */
export const AvatarGroupElement = AvatarGroup;

export * from '@vaadin/avatar-group/src/vaadin-avatar-group.js';

console.warn('WARNING: Since Vaadin 23.2, "@vaadin/vaadin-avatar" is deprecated. Use "@vaadin/avatar-group" instead.');
