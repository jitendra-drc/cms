<?php
/**
 * @link https://craftcms.com/
 * @copyright Copyright (c) Pixel & Tonic, Inc.
 * @license https://craftcms.github.io/license/
 */

namespace craft\events;

/**
 * Bulk element operation event class.
 *
 * @author Pixel & Tonic, Inc. <support@pixelandtonic.com>
 * @since 5.0.0
 */
class BulkElementOpEvent extends ElementQueryEvent
{
    /**
     * @var string The bulk operation key.
     */
    public string $key;
}
