## How to handle DateTimes.

* Don't relly on server-time!<!-- .element: class="fragment" -->
* Always use DateTime with timezone-information (User-Related Dates) – ZonedDateTime<!-- .element: class="fragment" -->
* Or use DateTime with UTC as Timezone (Server-Related Dates) – LocalDateTime<!-- .element: class="fragment" -->

Note: Rendering depends on the purpose. Either users local time or events local time
