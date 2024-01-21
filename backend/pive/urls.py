from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include

urlpatterns = [
    # ... your other URL patterns ...
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)