from django.urls import path
from django.urls import include
from django.contrib import admin
from rest_framework_simplejwt.views import TokenObtainPairView as token_obtain_pair
from .views import ProductListCreateView, ProductDetailView, ProductAdminListView, ProductAdminDetailView
from django.conf import settings
from django.conf.urls.static import static
# URL configuration for the core app

urlpatterns = [
    path('products/', ProductListCreateView.as_view(), name='product-list-create'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    path('admin/products/', ProductAdminListView.as_view(), name='product-admin-list'),
    path('admin/products/<int:pk>/', ProductAdminDetailView.as_view(), name='product-admin-detail'),
]+static (settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)